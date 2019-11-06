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
    for (i in winners) { var people = winners[i]
        for (j in people) {
            const name = people[j]
            if (name in scores) {
                scores[name] += 1
            } else {
                scores[name] = 1
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