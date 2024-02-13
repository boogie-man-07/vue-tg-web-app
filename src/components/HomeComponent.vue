<template>
    <el-row class="search-card">
        <el-col>
            <el-input class="custom-input" v-model="filteredValue" type="text" placeholder="Поиск работника" clearable />
        </el-col>
    </el-row>
    <el-row class="item-card">
        <template v-for="employee in employeesList" :key="employee.id">
            <employee-item-component :employee="employee" />
        </template>
    </el-row>
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
                { id: 1, fullname: 'Адыгезалов Мурад Арифович', position: 'руководитель проектов' },
                { id: 2, fullname: 'Иванов Дмитрий Сергеевич', position: 'рукодводитель группы развития' },
                { id: 3, fullname: 'Мальцев Сергей Владимирович', position: 'руководитель ИТ департамента' },
            ],
        }
    },
    computed: {
        employeesList() {
            return this.employees.filter(el =>
                    !this.filteredValue ||
                    el.fullname.toLowerCase().includes(this.filteredValue.toLowerCase()
                )
            )
        },
    },
}
</script>