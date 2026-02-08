<script setup>
import {ref, computed} from 'vue'
  import Header from './components/Header.vue'
  import Card from './components/Card.vue'
  import Section from './components/Section.vue'

  const people = ref(['John', 'Carlos'])
  const newPerson = ref('')

  const addPerson = () => {
    const name = newPerson.value.trim()

    if(!name) return 

    people.value.push(name)
    newPerson.value = ''
  }
</script>

<template>
  <Header/>
  <Card>
        <main class="card">
        <form id="personForm" class="rowForm">
            <input id="personInput" type="text" placeholder="Add person name" v-model="newPerson">
            <button>Add Person</button>
        </form>

        <form id="expenseForm" class="rowForm">
            <input id="descInput" placeholder="Expense Description"/>
            <input id="amountInput" placeholder="Amount"/>
            <select id="paidBySelect"></select>
            <button>Add Expense</button>
        </form>

        <Section title="People">
          <ul id="peopleList" class="list">
              <list v-for="person in people" :key="person">
                {{ person }}
              </list>
          </ul>
        </Section>

        <Section title="Expenses">
            <ul id = "expenseList" class="list"></ul>
        </Section>

        <Section title="Total">
            <p>
                Total Spent: <strong id= "totalSpent">$0.00</strong><br/>
                Split Per Person: <strong id = "splitAmount">$0.00</strong>
            </p>
        </Section>

        <Section title="Summary">
            <ul id = "summaryList" class="list"></ul>
        </Section>

    </main>
  </Card>
</template>

<style scoped>
  .rowForm {
      display: flex;
      gap: 10px;
      margin-bottom: 12px;
  }

  input, select {
      flex: 1;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid #c7d2fe;
  }

  button {
      padding: 10px 14px;
      border-radius: 10px;
      border: none;
      background: #34774b;
      color: #fcfcfc;
      cursor: pointer;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 8px;
  }

  .list li {
    padding: 10px;
    border-radius: 10px;
    background: #ccffd9;
  }

  #summaryList li {
    background: #ccffd9;
    color: #166534;
  }
</style>
