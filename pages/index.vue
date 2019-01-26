<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <emenu/>
      </el-col>
      <el-col :span="19">1</el-col>
    </el-row>
    <el-row :span="24">
      333
    </el-row>
  </div>
</template>

<script>
import Emenu from '@/components/index/menu.vue'
export default {
  components: {
    Emenu
  }
}
</script>

