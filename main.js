const allData = [
    {
        date: '1 июля 2020 г.',
        temperature: '-70,7 ° F',
        windspeed: '11,5 миль/ч',
        pressure: '766,9  ПА',
    },
    {
        date: '2 июля 2020 г.',
        temperature: '-69,6 ° F',
        windspeed: '10 миль/ч',
        pressure: '765  ПА',
    },
]

const t = document.querySelector('#card_tmpl')
const wr = document.querySelector('.wrapper')

const loader = document.querySelector('.loader')


class MarsInfo {
    constructor(info) {
        const clone = document.importNode(t.content, true);
        clone.querySelector('button').addEventListener('click', () => {
            const {date, ...otherData} = info
            console.log({date, otherData})
        })

        clone.querySelector('.date').textContent += info.date
        clone.querySelector('.tmp').textContent += info.temperature
        clone.querySelector('.wind').textContent += info.windspeed
        clone.querySelector('.press').textContent += info.pressure

        wr.appendChild(clone);
    }
}

function stopLoader() {
    loader.remove()
}

function showError(error) {
    wr.innerHTML = `<div class="error_msg">error on load: ${error}</div>`
}

function postData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            allData.push(data)
            resolve()
        }, 1500)
    })
}

function getData() {
    setTimeout(() => {
        stopLoader()

        allData.forEach((dataFromMars) => {
            new MarsInfo(dataFromMars)
        })
    }, 1000)
}

// you can throw your error
function throwError(){
    throw 'my error'
}

(async () => {
    try {

        let post = await postData(
            {
                date: '3 июля 2020 г.',
                temperature: '-70,7 ° F',
                windspeed: '11,5 миль/ч',
                pressure: '766,9  ПА',
            }
        )

        getData()

    } catch (error) {
        stopLoader()
        showError(error)
    }
})()
