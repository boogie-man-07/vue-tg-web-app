<template>
    <el-row class="search-card">
        <el-col>
            <el-input class="custom-input" v-model="filteredValue" type="text" placeholder="Поиск работника" clearable />
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
    data() {
        return {
            filteredValue: '',
            employees: [
                { id: 1, fullname: 'Адыгезалов Мурад Арифович', position: 'руководитель проектов', isSelected: false },
                { id: 2, fullname: 'Иванов Дмитрий Сергеевич', position: 'рукодводитель группы развития', isSelected: false },
                { id: 3, fullname: 'Мальцев Сергей Владимирович', position: 'руководитель ИТ департамента', isSelected: false },
            ],
        }
    },
    watch: {
        isAnySelected() {
            if (this.isAnySelected) {
                tg.MainButton.show()
            } else {
                tg.MainButton.hide()
            }
        },
    },
    mounted() {
        const tg = window.Telegram.WebApp
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    },
    methods: {
        selectItem(id) {
            this.employees.forEach(el => {
                el.id == id ? el.isSelected = !el.isSelected : el.isSelected = false
            });
        },
    },
    computed: {
        employeesList() {
            return this.employees.filter(el =>
                    !this.filteredValue ||
                    el.fullname.toLowerCase().includes(this.filteredValue.toLowerCase()
                )
            )
        },
        isAnySelected() {
            return this.employees.filter(el => el.isSelected == true).length > 0
        },
    },
}
</script>