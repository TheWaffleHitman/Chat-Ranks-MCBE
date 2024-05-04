/**
 * ||========================================================================================================================||
 * ||                                                                                                                        ||
 * ||  ________  _______   ________  _________  ___  ___  ________  ________  ___  ___  ________  ________  ________         ||
 * || |\   ___ \|\  ___ \ |\   __  \|\___   ___\\  \|\  \|\   __  \|\   __  \|\  \|\  \|\   __  \|\   __  \|\   ___  \       ||
 * ||  \ \  \_|\ \ \   __/|\ \  \|\  \|___ \  \_\ \  \\\  \ \  \|\  \ \  \|\  \ \  \\\  \ \  \|\ /\ \  \|\  \ \  \\ \  \     ||
 * ||   \ \  \ \\ \ \  \_|/_\ \   __  \   \ \  \ \ \   __  \ \   __  \ \   _  _\ \  \\\  \ \   __  \ \   __  \ \  \\ \  \    ||
 * ||    \ \  \_\\ \ \  \_|\ \ \  \ \  \   \ \  \ \ \  \ \  \ \  \ \  \ \  \\  \\ \  \\\  \ \  \|\  \ \  \ \  \ \  \\ \  \   ||
 * ||     \ \_______\ \_______\ \__\ \__\   \ \__\ \ \__\ \__\ \__\ \__\ \__\\ _\\ \_______\ \_______\ \__\ \__\ \__\\ \__\  ||
 * ||      \|_______|\|_______|\|__|\|__|    \|__|  \|__|\|__|\|__|\|__|\|__|\|__|\|_______|\|_______|\|__|\|__|\|__| \|__|  ||
 * ||                                                                                                                        ||
 * ||========================================================================================================================||
 * ||                                                                                                                        ||  
 * ||                                               ★ Please do not modify this code ★                                      ||  
 * ||                                   ► This Mod was created for Minecraft Bedrock Edition ◄                               || 
 * ||                                                                                                                        ||
 * ||========================================================================================================================||
 */

/**
* @made_by Death_Aruban
* @version [1.0.0] 
* @link [https://discord.com/invite/NKy9A9RAe8]
*/

export const config = {

    /**
     * put the tag you want to use the chat ranks component
     * to add other tags ["admin","mod","example"]
     * default tag is >> admin and mod <<
     */
    access_command:["admin","mod"],

    /**
     * here you can configure the rank permissions
     */
    permission:{
        //Basic setting for players without permission
        1:{
            default:true, //if you put false when the player sends the message it will be the basic one
            chat_display:'§c[§aCitizen§8]',
            chat_display_after:'§9>>',
            name_player_color:'§c',
            chat_color:'§9'
        },
        //allow list for players who have the tag
        2:{
            tag:'general',  //the tag that the player must have to have changes in chat
            chat_display:'§f[§dGeneral§8]', //as you will see the first part of the player role chat
            chat_display_after:'§f>>', //what will be after the player's name
            chat_color:'§c', //the color of the message the player sends
            name_player_color:'§9', //color of the player's name that will be seen in chat
            description:'Highest Rank in the Alaskan National Guard Server
        },
        3:{
            tag:'commander',
            chat_display:'§c[§fCommander§f]',
            chat_display_after:'§d>>',
            chat_color:'§5',
            name_player_color:'§d',
            description:'This role helps maintain order in the server, can ban or unban players, and often answers player questions'
        },
        4:{
            tag:'helper',
            chat_display:'§8[§dHelper§8]',
            chat_display_after:'§8>>',
            chat_color:'§f',
            name_player_color:'§a',
            description:'This role is often given to players who are willing to help other players. They usually do not have moderation permissions.'
        },
        5:{
            tag:'builder',
            chat_display:'§8[§8Builder§8]',
            chat_display_after:'§8>>',
            chat_color:'§f',
            name_player_color:'§f',
            description:'This role is given to players who contribute to building structures in the server.'
        },
        6:{
            tag:'vip',
            chat_display:'§8[§6Vip§8]',
            chat_display_after:'§8>>',
            chat_color:'§6',
            name_player_color:'§e',
            description:'This is a role often given to donors or long-time players. They might have some special perks.'
        }
    }
}
