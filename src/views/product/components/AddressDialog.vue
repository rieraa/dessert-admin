<template>
  <div>
    <el-dialog
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      @close="formData = {}"
      v-model="visible"
      :title="currentType === 'new' ? '新增地址' : '更新地址'"
      width="500"
    >
      <el-form :model="formData" :rules="rules" ref="ruleFormRef">
        <el-form-item label="收货人：" prop="contactName">
          <el-input v-model="formData.contactName" placeholder="请输入" clearable />
        </el-form-item>
        <el-form-item label="性别" prop="contactSex">
          <el-select v-model="formData.contactSex" placeholder="请选择" clearable>
            <el-option label="男" :value="0" />
            <el-option label="女" :value="1" />
          </el-select>
        </el-form-item>
        <el-form-item label="电话" prop="contactTel">
          <el-input v-model="formData.contactTel" placeholder="请输入" clearable />
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="formData.address" placeholder="请输入" clearable />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="onNewConcel">取消</el-button>
          <el-button :loading="isLoading" type="primary" @click="onNewOrUpdateConfirm(ruleFormRef)">
            {{ currentType === 'new' ? '新增' : '更新' }}
          </el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :model-value="dialogVisible"
      title="我的地址"
      width="600"
      @close="close"
    >
      <el-radio-group v-if="list.length !== 0" v-model="daId" style="width: 100%">
        <el-descriptions :title="`地址${index + 1}`" style="width: 100%" v-for="(item, index) in list" :key="item.daId">
          <template #extra>
            <div>
              <el-button type="primary" @click="onEditeAddress(item)" text>编辑</el-button>
              <el-popconfirm title="你确定要删除吗?" @confirm="onDeleteADdress(item.daId)">
                <template #reference>
                  <el-button type="danger" text>删除</el-button>
                </template>
              </el-popconfirm>
            </div>
          </template>
          <el-descriptions-item label="收货人">{{ item.contactName }}</el-descriptions-item>
          <el-descriptions-item label="电话号码">{{ item.contactTel }}</el-descriptions-item>
          <el-descriptions-item label="性别">{{ getSexText(item.contactSex) }}</el-descriptions-item>
          <el-descriptions-item label="收货地址">{{ item.address }}</el-descriptions-item>
          <el-descriptions-item label=""
            ><el-radio :label="item.daId" :value="item.daId">选择</el-radio></el-descriptions-item
          >
        </el-descriptions>
      </el-radio-group>
      <el-button @click="onClickAdd"> 新增地址</el-button>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="onConcel">取消</el-button>
          <el-button type="primary" @click="onConfirm"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import { getDeliveryAddress, addAddress, updateDeliveryAddress, deleteByDeliveryAddressId } from '@/apis/address.js';

defineProps({
  dialogVisible: Boolean,
});

const daId = ref(0);
const visible = ref(false);
const formData = ref({});
const isLoading = ref(false);
const ruleFormRef = ref();
const currentType = ref('new');

const list = ref([]);

const getSexText = sexId => {
  if (sexId === 0) return '男';
  return '女';
};

const validatorPhone = (rule, value, callback) => {
  const phoneNumberRegex = /^1[3456789]\d{9}$/;
  if (value === '') {
    callback(new Error('请输入电话'));
  } else if (!phoneNumberRegex.test(value)) {
    callback(new Error('请输入正确的电话号码'));
  } else {
    callback();
  }
};

const rules = reactive({
  address: [{ required: true, message: '请输入地址', trigger: 'blur' }],
  contactSex: [{ required: true, message: '请输入性别', trigger: 'blur' }],
  contactName: [{ required: true, message: '请输入收货人', trigger: 'blur' }],
  contactTel: [{ validator: validatorPhone, trigger: 'blur' }, {}],
});

// 定义要发射的自定义事件
const emits = defineEmits(['close', 'confirm']);

const onChange = () => {};

/** 监听所有取消事件触发 */
const close = () => {
  formData.value = {};
  emits('close');
};

/** 点击取消地址选择 */
const onConcel = () => {
  emits('close');
};

/** 确定地址选择 */
const onConfirm = () => {
  emits('close');
  const info = list.value.find(item => item.daId === daId.value);
  emits('confirm', info);
};

/** 取消新增地址 */
const onNewConcel = () => {
  visible.value = false;
};

/** 点击新增地址时 */
const onClickAdd = () => {
  currentType.value = 'new';
  visible.value = true;
};

/** 提交新增地址 */
const onNewOrUpdateConfirm = async formEl => {
  if (!formEl) return;
  const validateRes = await formEl.validate(valid => {
    if (valid) {
      return true;
    } else {
      return false;
    }
  });
  console.log('validateRes!', validateRes);
  if (validateRes) {
    isLoading.value = true;
    if (currentType.value === 'new') {
      await addAddress(formData.value);
    } else {
      await updateDeliveryAddress(formData.value);
    }

    await loadAddressList();
    currentType.value === 'new' ? ElMessage.success('新增成功') : ElMessage.success('更新成功');
    formData.value = {};
    isLoading.value = false;
    visible.value = false;
  }
};

/** 编辑地址 */
const onEditeAddress = data => {
  currentType.value = 'update';
  formData.value = data;
  visible.value = true;
};

/** 删除地址 */
const onDeleteADdress = async daId => {
  await deleteByDeliveryAddressId(daId);
  await loadAddressList();
  ElMessage.success('删除成功');
};

const loadAddressList = async () => {
  const res = await getDeliveryAddress();
  if (res.length !== 0) {
    list.value = res;
  }
};

onMounted(async () => {
  await loadAddressList();
});
</script>

<style lang="scss" scoped>
.form {
  .form-item {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
