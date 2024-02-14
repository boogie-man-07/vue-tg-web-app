<template>
    <el-card
      class="request-item" :class="employee.isSelected ? 'selected-card' : 'deselected-card'" shadow="hover" 
      @click="chooseEmployee(employee)"
    >
    <el-row>
        <el-col>
            <el-text class="title-text w-100" truncated> ФИО: {{ employee.fullname }}</el-text>
            <el-text class="subtitle-text w-100" truncated>Должность: {{ employee.position }}</el-text>
        </el-col>
    </el-row>
    </el-card>
</template>
  
<script>
  
export default {
    name: "EmployeeItemComponent",
    emits: ['select-item'],
    components: {},
    props: {
        employee: Object
    },
    methods: {
        chooseEmployee(item) {
            this.$emit('select-item', item.id)
            console.log(item)
        }
    },
}
</script>
  