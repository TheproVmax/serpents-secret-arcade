export const Game = {

save:
JSON.parse(
localStorage.getItem("save")
) || {
level:1,
hp:100,
xp:0,
area:"map"
}

};

export function saveGame(data){

localStorage.setItem(
"save",
JSON.stringify(data)
);

}

export function loadGame(){

return JSON.parse(
localStorage.getItem("save")
);

}
