const personForm = document.getElementById('perf')
const personInput = document.getElementById('perf')
const peopleList = document.getElementById('perf')

const people = []

const render = () => {
    peopleList.innerHTML = ''

    people.forEach(person => {
        const li = document.createElement('li')
        li.textContent = person
        peopleList.appendChild(li)
    })
}

render()