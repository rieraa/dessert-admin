<template>
  <div class="container">
    <div class="left">
      <img :src="bgImg" alt="" />
    </div>
    <el-card shadow="never" class="box-card">
      <div class="right">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="登录" name="first">
            <el-form :model="form" label-width="60px">
              <el-form-item label="用户名">
                <el-input v-model="form.userName" />
              </el-form-item>
              <el-form-item label="密码">
                <el-input
                  type="password"
                  autocomplete="off"
                  v-model="form.password"
                />
              </el-form-item>
              <el-form-item>
                <el-button style="width: 100%" type="primary" @click="onSubmitLogin"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册" name="second">
            <el-form :rules="rules" :model="form" label-width="80px">
              <el-form-item label="用户名" prop="userName">
                <el-input v-model="form.userName" />
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input
                  type="password"
                  autocomplete="off"
                  v-model="form.password"
                />
              </el-form-item>
              <el-form-item label="确认密码" prop="password">
                <el-input
                  type="password"
                  autocomplete="off"
                  v-model="form.checkPassword"
                />
              </el-form-item>
              <el-form-item label="性别">
                <el-radio-group v-model="form.userSex">
                  <el-radio :value="0" label="男" />
                  <el-radio :value="1" label="女" />
                </el-radio-group>
              </el-form-item>
              <el-form-item>
                <el-button style="width: 100%" type="primary" @click="onSubmitRegister"
                  >注册</el-button
                >
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>
    
<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { register, login } from "@/apis/user.js";
import { setToken } from '@/utils/auth';
import bgImg from "@/assets/loginBg.jpg";
import { ElMessage } from 'element-plus'

const activeName = ref('first')
const router = useRouter();

let form = ref({
  userName: '',
  password: '',
  checkPassword: '',
  userSex: 0
});

const rules = reactive({
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '长度控制在3-20以内', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 8, max: 20, message: '长度控制在8-20以内', trigger: 'blur' },
  ]
})

const handleClick = (tab) => {
  if (activeName !== tab.paneName) {
    form.value = {
      userName: '',
      password: '',
      checkPassword: '',
      userSex: 0
    };
  }

}

const onSubmitLogin = async () => {
  const res = await login(form.value);
  console.log(res);
  ElMessage.success('登录成功');
  setToken(res.token);
  localStorage.setItem('userName', res.userName);
  location.replace('/')
}

const onSubmitRegister = async() => {
  const res = await register(form.value);
  console.log(res);
  if(res){
    ElMessage.success('注册成功');
    activeName.value = 'first'
    form.value = {
      userName: '',
      password: '',
      checkPassword: '',
      userSex: 0
    };
  }
}
</script>
    
<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left {
    width: 100%;
    border-radius: 3% 0 0 3%;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .right {
    padding: 60px;
  }
}
.box-card {
  width: 100%;
  height: 580px;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>