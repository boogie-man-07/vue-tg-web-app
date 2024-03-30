<template>
    <el-row class="search-card">
        <el-col>
            <el-input class="custom-input" v-model="filteredValue" type="text" placeholder="Поиск работника" @clear="clearInput" clearable />
        </el-col>
    </el-row>
    <template v-if="employeesList.length > 0  && filteredValue != ''">
        <el-row>
            <template v-for="employee in employeesList" :key="employee.id">
                <employee-item-component :employee="employee" @select-item="selectItem" />
            </template>
        </el-row>
    </template>
    <template v-if="filteredValue == ''">
        <el-row>
            <el-col class="flex-centered">
            <img class="bot-gif" src="/bot-gif.gif" height="200" width="300" alt="logo" />
            </el-col>
        </el-row>
        <el-row class="empty-card">
            <el-col>
                <el-text class="empty-card-text"><h2>Введите ФИО работника для поиска</h2></el-text>
                <el-text class="empty-card-text"><h5>Как только вы начнете вводить ФИО, работники подходящие под условия поиска высветятся в результатах поисках. Выделите необходимого работника и нажмите "Получить карточку".</h5></el-text>
            </el-col>
        </el-row>
    </template>
</template>

<script>
import EmployeeItemComponent from "@/components/EmployeeItemComponent.vue"

export default {
    "name": "HomeComponent",
    components: {
        EmployeeItemComponent
    },
    emits: ['change-tg-button-state', 'set-selected-item-id'],
    data() {
        return {
            filteredValue: '',
            employees: [
                { id: 1, fullname: 'Адыгезалов Мурад Арифович', position: 'руководитель проектов', isSelected: false },
                { id: 2, fullname: 'Иванов Дмитрий Сергеевич', position: 'рукодводитель группы развития', isSelected: false },
                { id: 3, fullname: 'Сергеева Анна Владимировна', position: 'электромонтер', isSelected: false },
                { id: 4, fullname: 'Шмелева Нина Алексеевна', position: 'главный бухгалтер', isSelected: false },
                { id: 5, fullname: 'Черных Владимир Дмитриевич', position: 'главный инженер', isSelected: false },
                { id: 6, fullname: 'Тихонов Марк Михайлович', position: 'администратор проектов', isSelected: false },
                { id: 7, fullname: 'Смирнова Дарья Егоровна', position: 'системный аналитик', isSelected: false },
                { id: 8, fullname: 'Родионова Мария Давидовна', position: 'директор по развитию', isSelected: false },
                { id: 9, fullname: 'Митрофанова Софья Романовна', position: 'руководитель розницы', isSelected: false },
                { id: 10, fullname: 'Григорьев Константин Александрович', position: 'специалист поддержки', isSelected: false }
            ],
        }
    },
    watch: {
        isAnySelected() {
            if (this.isAnySelected) {
                this.$emit('change-tg-button-state', true)
            } else {
                this.$emit('change-tg-button-state', false)
            }
        },
    },
    methods: {
        selectItem(id) {
            this.employees.forEach(el => {
                el.id == id ? el.isSelected = !el.isSelected : el.isSelected = false
            });
            const currentItem = this.employees.filter(el => el.isSelected)
            this.$emit('set-selected-item-id', currentItem.length > 0 ? currentItem[0].id : 0)
        },
        clearInput() {
            this.employees.forEach(el => {
                el.isSelected = false
            });
        },
    },
    computed: {
        employeesList() {
            return this.employees.filter(el =>
                !this.filteredValue ||
                el.fullname.toLowerCase().includes(this.filteredValue.toLowerCase()) ||
                el.position.toLowerCase().includes(this.filteredValue.toLowerCase())
            )
        },
        isAnySelected() {
            return this.employees.filter(el => el.isSelected == true).length > 0
        },
    },
}
</script>