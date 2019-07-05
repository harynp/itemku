const input = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
const output = ["Prodo came in.", "Ryan came in.", "Prodo has left.", "Prodo came in."]

function solution(record) {
    var answer = [];
    for(let i = 0; i<record.length; i++) {
        let splitRecord = record[i].split(' ');
        let type = splitRecord[0];
        let id = splitRecord[1];
        let name = splitRecord[2];
        if(type === 'Enter' && !answer.includes(id)){  
           let user = {
               id: id,
               data: `${name} come in.`
           }     
           answer.push(user);
           for(let y = 0;y<answer.length;y++) {
               if(answer[y].id === id) {
                   let user = {
                       id: id,
                       data: `${name} came in.`
                   }
                   answer[y] = user;
               } else if(answer[y].id === 'Leave') {
                let user = {
                    id: id,
                    data: `${name} has left.`
                }
                answer[y] = user;
               }
           }
        } else if(type === 'Leave') {
           for(let j = 0;j<answer.length; j++) {
               let splitAnswer = answer[j].data.split(' ');
               let splitIdAnswer = answer[j].id.split(' ');
               for(let z=0;z < splitIdAnswer.length;z++) {
                   if(id === splitIdAnswer[z]) {
                    let user = {
                        id: `Leave`,
                        data: `${splitAnswer[0]} has left.`,
                    }  
                    answer.push(user);
                   }
               }
           }
        } else if('Change') {
            for(let k = 0; k< answer.length;k++){
                let splitChangeIdName = answer[k].id;
                if(id === splitChangeIdName) {
                    let changeName = {
                        id: id,
                        data: `${name} come in.`
                    }
                    answer[k] = changeName;
                }
            }
        }
    }
    answer = answer.map(officer => officer.data);
    return answer;
}

console.log(solution(input));