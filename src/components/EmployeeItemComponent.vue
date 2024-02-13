<template>
    <el-col
      class="request-item" shadow="hover" 
      @click="chooseEmployee(employee)"
    >
        <el-row class="card-padding">
            <el-col>
                <el-text class="title-text w-100" truncated> ФИО: {{ employee.fullname }}</el-text>
                <el-text class="subtitle-text w-100" truncated>Должность: {{ employee.position }}</el-text>
            </el-col>
        </el-row>
    </el-col>
</template>
  
<script>
  
export default {
    name: "EmployeeItemComponent",
    components: {},
    props: {
        employee: Object
    },
    methods: {
        chooseEmployee(item) {
            console.log(item)
        }
    },
}
</script>
  