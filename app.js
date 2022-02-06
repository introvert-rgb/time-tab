let currentTime = document.querySelectorAll('.currentTime');

let units = document.querySelectorAll('.units');
let day = document.querySelectorAll('.day');
let prevTime = document.querySelectorAll('.prevTime');
let prevunits = document.querySelectorAll('.prevunits');
let allBtn = document.querySelectorAll('.Btn');
let bottomInfo = document.querySelectorAll('.bottom');


let workObj = [{
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
];
let clickAction = document.querySelectorAll('.li-item');

function reset() {
    clickAction.forEach((buttons) => {
        buttons.classList.remove('activeColor');
    });
}

clickAction.forEach((Btns, index) => {

    Btns.addEventListener('click', (e) => {
        reset();
        Btns.classList.add('activeColor');
        if (e.srcElement.classList.contains('weekly')) {

            for (let obj in workObj) {
                let test = workObj[obj].timeframes.weekly.current;
                let test1 = workObj[obj].timeframes.weekly.previous;
                currentTime[obj].innerHTML = test;
                prevTime[obj].innerHTML = test1;
                if (test > 1) {
                    units[obj].innerHTML = `hrs`;
                } else {
                    units[obj].innerHTML = `hr`;
                }
                bottomInfo[obj].innerHTML = `Last Week-`;
            }

        } else if (e.srcElement.classList.contains('monthly')) {
            for (let obj in workObj) {

                let test = workObj[obj].timeframes.monthly.current;
                let test1 = workObj[obj].timeframes.monthly.previous;
                currentTime[obj].innerHTML = test;
                prevTime[obj].innerHTML = test1;
                if (test > 1) {
                    units[obj].innerHTML = `hrs`;
                } else {
                    units[obj].innerHTML = `hr`;
                }
                bottomInfo[obj].innerHTML = `Last Month-`;
            }
        } else {
            for (let obj in workObj) {

                let test = workObj[obj].timeframes.daily.current;
                let test1 = workObj[obj].timeframes.daily.previous;
                currentTime[obj].innerHTML = test;
                prevTime[obj].innerHTML = test1;
                if (test > 1) {
                    units[obj].innerHTML = `hrs`;
                } else {
                    units[obj].innerHTML = `hr`;
                }
                bottomInfo[obj].innerHTML = `Last Day-`;
            }
        }
    })


});