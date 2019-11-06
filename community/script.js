$(function() {


    var scores = {}

    // Attendace
    for (i in attendance) {
        var people = attendance[i].split("\n")
        for (j in people) {
            const name = people[j]
            if (name in scores) {
                scores[name] += 1
            } else {
                scores[name] = 1
            }
        }
    }

    // Winnings
    for (i in winners) { var wins = winners[i]
        for (j in wins) { var p = wins[j]
            if (p.name in scores) {
                scores[p.name] += p.winnings
            } else {
                scores[p.name] = p.winnings
            }
        }
    }


    delete scores[""]
    display = Object.entries(scores)
    display = display.sort((a,b)=>{
        if (a[1] == b[1]) {
            return a[0] > b[0]
        } else {
            return a[1] < b[1]
        }
    })
    console.log(display)

    for (i in display) { const entry = display[i]

        $("#tickets").append(`
        <div class="guest">
            <div class="count">${entry[1]}</div>
            <div class="name">${entry[0]}</div>
        </div>
        `)

    }

})