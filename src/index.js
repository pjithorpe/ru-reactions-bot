const Discord = require('discord.js');
const sheet = require('./libs/sheet');
const config = require('./config');



const client = new Discord.Client();
// Rules store
client.rules = {};
client.rules.users = new Discord.Collection();
client.rules.roles = new Discord.Collection(); // For rules without a user requirement
client.rules.phrases = new Discord.Collection(); // For rules without a user or role predicate (will check every single message contents!)


function fetchRules() {
    try {
        return sheet.getRules()
            .then(
                (result) => {
                    const rows = result;
                    rows.forEach(row => {
                        const reaction = row.reaction.trim();
                        const rule = {};

                        rule.reaction = reaction;
                        rule.users = row.users.split(/\n+/).map(str => str.trim());
                        if (rule.users[0] === '') rule.users = [];
                        console.log(rule.users);
                        rule.roles = row.roles.split(/\n+/).map(str => str.trim());
                        if (rule.roles[0] === '') rule.roles = [];
                        console.log(rule.roles);
                        rule.phrases = row.phrases.split(/\n+/).map(str => str.trim().toLowerCase());
                        if (rule.phrases[0] === '') rule.phrases = [];
                        console.log(rule.phrases);

                        console.log(rule);

                        // Has users, so add by user
                        if (rule.users.length) {
                            rule.users.forEach(user => {
                                console.log("add by user");
                                if (!client.rules.users.has(user)) client.rules.users.set(user, [rule]);
                                else client.rules.users.get(user).push(rule);
                            });
                        }
                        // Has no users, but does have roles, so add by role
                        else if (rule.roles.length) {
                            rule.roles.forEach(role => {
                                console.log("add by role");
                                if (!client.rules.roles.has(role)) client.rules.roles.set(role, [rule]);
                                else client.rules.roles.get(role).push(rule);
                            });
                        }
                        // Has no users or roles, so add by phrase
                        else if (rule.phrases.length) {
                            rule.phrases.forEach(phrase => {
                                console.log("add by phrase");
                                if (!client.rules.phrases.has(phrase)) client.rules.phrases.set(phrase, [rule]);
                                else client.rules.phrases.get(phrase).push(rule);
                            });
                        }
                    });

                    console.log(client.rules);
                    console.log('Rules fetched successfully.');
                    return;
                },
                (err) => {
                    console.log(err);
                    return Promise.reject('Sheets API request failed.');
                }
            );
    }
    catch (e) {
        throw new Error('Failed to get rules!\n' + e);
    }
}

function matchPhraseRules(message, ruleset) {
    let reactions = [];

    ruleset.forEach((rules, phrase) => {
        rules.forEach(rule => {
            if (message.content.toLowerCase().includes(phrase)) reactions.push(rule.reaction);
        });
    });
    
    return reactions;
}

function matchRoleRules(message, ruleset) {
    let reactions = [];
    const roles = message.member.roles;

    roles.forEach(role => {
        if (ruleset.has(role)) {
            ruleset.get(role).forEach(rule => {
                if (!rule.phrases.length || rule.phrases.some(phrase => message.content.toLowerCase().includes(phrase))) {
                    reactions.push(rule.reaction);
                }
            });
        }
    });
    
    return reactions;
}

function matchUserRules(message, ruleset) {
    let reactions = [];
    const userID = message.author.id;

    if (ruleset.has(userID)) {
        ruleset.get(userID).forEach(rule => {
            ruleMatched = false;
            // If there is no role requirement for this rule, or if the user has a required role
            if (!rule.roles.length || (rule.roles.some(role => message.member.roles.has(role)))) {
                ruleMatched = true;
            }
            if (!rule.phrases.length || rule.phrases.some(phrase => message.content.toLowerCase().includes(phrase))) {
                ruleMatched = true;
            }
            else ruleMatched = false;

            if (ruleMatched) reactions.push(rule.reaction);
        });
    }

    return reactions;
}

function matchRules(message, rules) {
    let reactions = [];

    if (rules.users.size) reactions = reactions.concat(matchUserRules(message, rules.users));
    console.log('1');
    console.log(reactions);
    if (rules.roles.size && message.member.roles.size) reactions = reactions.concat(matchRoleRules(message, rules.roles));
    console.log('2');
    console.log(reactions);
    if (rules.phrases.size) reactions = reactions.concat(matchPhraseRules(message, rules.phrases));
    console.log('3');
    console.log(reactions);

    return reactions;
}

function handleMessage(message) {
    if (message.author.bot) return;

    try {
        const reactions = matchRules(message, client.rules)
        if(reactions.length) reactions.forEach(reaction => {console.log(reaction);message.react(reaction);});
    }
    catch (e) {
        console.error(e);
        return message.reply('Error in reacting based on rule.');
    }
}


fetchRules();

// Event listeners
client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    handleMessage(message);
});

client.on('error', console.error);

client.login(config.discord.bot_token);