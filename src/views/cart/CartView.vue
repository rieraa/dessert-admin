<template>
  <div class="main">
    <div class="cart-header">
      <div class="cart-header-item">
        <div class="text-label compact no-pointer">
          <div class="en-title">
            <div class="en-title-inner">
              PROPERTY
              <!---->
            </div>
          </div>
          <div class="title" title="">属性</div>
        </div>
      </div>
      <div class="cart-header-item">
        <div class="text-label compact no-pointer">
          <div class="en-title">
            <div class="en-title-inner">
              <!---->
            </div>
          </div>
          <div class="title" title=""></div>
        </div>
      </div>
      <div class="cart-header-item">
        <div class="text-label compact no-pointer">
          <div class="en-title">
            <div class="en-title-inner">
              PRICE
              <!---->
            </div>
          </div>
          <div class="title" title="">单价</div>
        </div>
      </div>
      <div class="cart-header-item">
        <div class="text-label compact no-pointer">
          <div class="en-title">
            <div class="en-title-inner">
              AMOUNT
              <!---->
            </div>
          </div>
          <div class="title" title="">数量</div>
        </div>
      </div>
      <div class="cart-header-item">
        <div class="text-label compact no-pointer">
          <div class="en-title">
            <div class="en-title-inner">
              TOTAL
              <!---->
            </div>
          </div>
          <div class="title" title="">小计</div>
        </div>
      </div>
    </div>
    <div class="cart-goods">
      <div v-for="item in list" :key="item" class="cart-goods-item">
        <div class="item-checkbox" @click="onCheck(item)">
          <div class="base-checkbox">
            <img
              class="base-icon"
              :src="getIcon(item.checked)"
              alt="unchecked-30"
              style="width: 30px; height: 30px; margin-right: 4px"
            />
          </div>
        </div>
        <div class="item-goods-info">
          <img class="img" alt="goods img" lazy="loading" :src="item.dessertImg" />
          <div>
            <div class="name">{{ item.dessertName }}</div>
            <div class="flavor">{{ item.tasteName }}</div>
            <div class="spec">{{ item.speName }}</div>
            <!---->
          </div>
        </div>
        <div class="item-attr"></div>
        <div class="item-attr">
          <span class="price"
            ><span class="base-price">¥ {{ item.unitPrice }}</span
            ><!----></span
          >
        </div>
        <div class="item-attr">
          <div class="base-counter">
            <span class="base-counter-minus" @click="onNumberChange(item, 'min')"
              ><img
                class="base-icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAAXNSR0IArs4c6QAAAK5QTFRFAAAAtpJt0aJ0z59/2LGJ0KqE1LKI0qV/0qmD1auH0KJ7z6F5z510zpxy0aN80KB4zp51zZ51zZ51z552zp51z594zpty0KB5z594z6B4zZtyzp51zZpwzJltzJpvy5htzJlvzJpx0qeB1KqH2LGR3buf3r2h4MGo4cSr5cu258+759G96tXE6tbG69fH69jI8uXa+PHr+PLs+fTv+/bz+/f0/Pn3/vz7/v38////PA3TrQAAAB90Uk5TAAcLEBobHkpKVV16f6Wmsr2+yM7P0NTX8PD4+f3+/pADB1oAAAHNSURBVEjHtZfZVuJAEEALFATZGfaQvrIzihB26/9/bB5wQwMmKec+5uSe7qSrqqtEQknni6V2x3PO67RLxXxaIpMpNPuc0W8WMpHUXNURgqvmflTvGqd3R/NFsNkfj/tNsJiPTs8ad1fVbMUHGC93esZuOQbwK9nL7n0PGMzWGsJ6NgB69xfUVNkHplu9wHYK+OVUmHtTB4aBXiEYAvWb7+5tC5gc9CqHCdC6/bZuC3jUH3kEWl/WTtXhYaURWD1A/fy7y0AkV3UFlM/OyI+05/ed+59OLNuDiUZmAr2PaKnA8BBdPgyh8h7PPgQagwD8tzhvwFRjMYU/rzkIg208eTuAU4bWYKYxmUFNRCTjYB1XXoPLiEgBxhqbMRREpAnL+PISmiLpPuziyzvopyUPI03ACPJShHkSeQ5FKcEiibyAkrRjhuanEG1LFzZJ5A10xYO9qqq+PP+NxPOLqqruwRMHR1VVfSIiT6qqegRnk03b7iT/YR3bUZmCxBSepsQwpaSpGNjKkKkAJi29VXvRT3bdNH7jojNdsbbL3dRW2BoaWytlauJs7aOtcbW1zLZm3Tgm2AYUEZFcLXw0quX+91D2MQ52Pee87pVx8B96AS47w/0NlgAAAABJRU5ErkJggg=="
                alt="reduce-30"
                style="width: 30px; height: 30px" /></span
            ><span class="value">{{ item.quantity }}</span
            ><span class="base-counter-add" @click="onNumberChange(item, 'add')"
              ><img
                class="base-icon"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAAAXNSR0IArs4c6QAAAEJQTFRFAAAA0ZdoyZtszJluy5htypdtyphrzJhty5lty5hsy5dty5ltzJlty5htzJhty5hty5hsy5ht2raY8eTa8uXa+/j1bvty5gAAABF0Uk5TABYhPFlgfp+xtMrq6vL4+v5vlFDPAAAAuklEQVQ4y42UyRKDIBBEGxFBULRB//9Xc0g0oJZMn4B6NQuzAH8pY32IMXhrFJ6k3cJTi9M3oBt50djVRD/zprkviWHlg9ahIIr3lIrLyfSljZxLOz9fXRXHtlXxfGOuc6kRjgCg+YZQA3DviAPU8o4sCobvCA1sC7HwLcRjaiETIkmmvB3a9/OYE0lGCRJajoIkXEHSgq8TFEBQRkkzCFpK0piC9pYMiWTUJAMrGXvJ8jhW0BTjdFlBH9BdPCV6fLgGAAAAAElFTkSuQmCC"
                alt="plus-30"
                style="width: 30px; height: 30px"
            /></span>
          </div>
        </div>
        <div class="item-attr">
          <span class="base-price">¥ {{ item.quantity * item.unitPrice }}</span>
        </div>
      </div>
      <div style="height: 80px"></div>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <div class="checkbox" @click="checkAll">
          <div class="base-checkbox">
            <img
              class="base-icon"
              :src="getIcon(isAll)"
              alt="unchecked-30"
              style="width: 30px; height: 30px; margin-right: 4px"
            /><span class="select-all">全选</span>
          </div>
        </div>
        <span style="padding-right: 10px">已选择{{ `${totalChecked}` }}件</span>
        <el-button type="text">清空购物车</el-button>
      </div>
      <div class="bottom-right">
        <span style="font-size: 20px">￥{{ total }}</span>
        <el-button
          :disabled="total === 0"
          @click="dialogVisible = true"
          type="primary"
          style="margin-left: 15px; width: 100px; height: 45px; border-radius: 15px"
        >
          <div>
            <p style="padding-bottom: 2px">PAY</p>
            <p>结算</p>
          </div>
        </el-button>
      </div>
    </div>
    <el-dialog
      @close="close"
      v-model="dialogVisible"
      width="350"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <div style="display: flex; flex-direction: column; align-items: center">
        <div style="display: flex; align-items: center; margin-bottom: 10px">
          <span style="font-size: 14px; width: 150px">备注（可选）</span> <el-input v-model="remarks"></el-input>
        </div>
        <div style="display: flex; align-items: center">
          <span style="font-size: 14px; width: 150px">地址</span>
          <el-input readonly v-if="daId" v-model="address"></el-input>
          <el-button style="margin: auto" type="primary" text @click="AddressDialogVisible = true">选择地址</el-button>
        </div>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" :loading="isLoading" @click="createOrder"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
    <AddressDialog
      @confirm="onAddressComfirm"
      @close="AddressDialogVisible = false"
      :dialogVisible="AddressDialogVisible"
    ></AddressDialog>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { createCartOrder } from '@/apis/order.js';
import { updateCart, getCartList, deleteCart } from '@/apis/cart.js';
import { ElMessage } from 'element-plus';
import { getCurrentDateTime } from '@/utils/time.js';
import AddressDialog from '../product/components/AddressDialog.vue';

// 单选框图片
const defaultCheckSrc =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAAXNSR0IArs4c6QAAAKJQTFRFAAAAtpJt0aJ0z59/2LGJ0KqE1LKI0qV/0qmD1auH0KJ7z6F5z510zpxy0aN80KB4zp51zZ51zZ51z552zp51z594zpty0KB5z594z6B4zZtyzp51zZpwzJltzJpvy5htzJlvzJpx0qeB1KqH2LGR3buf3r2h4MGo4cSr58+76tXE69fH69jI8uXa+PHr+PLs+fTv+/bz+/f0/Pn3/vz7////S7GEsAAAAB90Uk5TAAcLEBobHkpKVV16f6Wmsr2+yM7P0NTX8PD4+f3+/pADB1oAAAG4SURBVEjHtZfXdsIwDEAFBcpeZYf4lk2BsP3/v9YHumgDja32PubkHjuxJEsisaQL5Uq3FxgT9LqVciEticmW2kOuGLZL2URqvm6IwdTzv6qPrcu7k+Uq2h3P5+MuWi0nl2etx7tqrhYCTNcHe8VhPQUIa7nbbnEAjBZbG8N2MQIGxRtqqhoC8729wX4OhNVUnPvQBMaRvUM0BpoPP91MB5id7F1OM6CT+bFuB3ixv/ICdL6tnWrC88YmYPMMzevvrgKJXGs3QPXqjMJEe/7YefjlxHIDmNnEzGDwGS01GJ+Sy6cx1D7iOYTIOhBB+B7nLZhbJ+bw9JaDMNq7yfsRXDK0AQvryAIaIiJZA1tXeQsmKyIlmFpnplASkTas3eU1tEXSQzi4ywcYpqUAE+vBBApShqWPvISyVGDlI6+gIl3H0PwSol3pw85H3kFfAjj6yEcIxMDZRz6D0cmqbff8f1hPd1SqIFGFpyoxVCmpKga6MqQqgL6lt64v+n7XTesvLjrVFau73FVtha6h0bVSqiZO1z7qGlddy6xr1pVjgm5AERHJN+JHo0b+v4eyz3GwHxgT9O+Mg68QNhg30QcbBQAAAABJRU5ErkJggg==';
// 单选框选中时
const checkedCheckSrc =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAAXNSR0IArs4c6QAAAZ5QTFRFAAAA1Kp/zJlmyJJtxZdo0aJozJlwzphvy5dsy5hvzJltzJlsy5ltyphuzJhuzJhtzJluy5htyphszJhty5huzJhty5hty5hty5hty5ltzJhtzJhuzJltzJhty5hty5dtzJlty5hty5huy5luy5lvzJpvzJpwzJpxzJtyzZxzzZ10zZ11zp11zp52zp93z6F60KJ80KN90aR/0aWA0qeC0qiD06iE06mG1KqG1KqH1KqI1KyJ1a6M17CP17GR2LKS2LOT2LOU2bWW27eZ27ib3Lqe3Luf3byg3byh3b2i3r6i3r6k38Cm38Cn4MOq4cWt48ix48iy48my5Mq05cy35cy45c2559C859G+6NG/6NK/6dTC6tXD6tbF69jI69nJ7NrL7dvM7d3P7t3Q7+DU7+HU8OLW8OLX8ePY8eTZ8uXb8ufe8+fd8+ng9Onh9Ori9evj9ezk9u3m9u7n9/Dr+PHr+PHs+fPu+fPv+vXw+vXx+vby+/f0+/j1+/j2/Pn2/Pn3/Pr4/fv5/fv6/fz7/fz8/v38/v39/v7+/////cwQ3AAAACF0Uk5TAAYKDhYWGT5ARUZVcHmVn6Wys73BwsPGzt7f6+/4+fv+JjDK5gAAAntJREFUSMe1l+dbE0EQxieBEAJpJDEhuZQbRTAo1YKoCGLvir33AlbEgooiEuO9/7UfIOHKbrLHPb6fbue537O3N7NTiITyhyKxTFYrFLRsJhYJ+UlZgXCqyBYVU+GAEhrsKrFApa5gU7Q9zVKl2xuibXGdG0iPt8nZzjw3Ub5TgvqiOjeVHvWJ2JYkKynZ4mRbu1lR3a2OfZVZ5m7b3r4ku1DSeu4ou1LU4iPdHaybPNaWZ5fKb0RLnF0rXo9n3T2s1+I8zZvQlvU7yJvS2g1NuCDKZ8ZqjwkiokBJne2ZxcpgLTsEiCjsYuObQHWotggTUUqdPWEAM/VVishfVGb3rwBPTFnRTx3K7MBHYKHfZAhRRJXd+gz4tc9siVBMFb4KGMcslhhlFNmjBnDdaspQTo3dsww832a15UjbWEy8vrFdwvZ/AD4N2owaFTYWs8CLnWL4MfD7gN1YMMMzAN4Pi9hLAE6yEzZ9Nl8xgC9jTvbIX+CW06xR1rw8XQF+TtpfGl0C5nqccNbmqqlloHLK+s6Od8DikOAwGXuQjC8CxmWL6QFQOST6EzFHeI7MA7hr+sgLAM4LXRChkN206yWAp+W68/8A98T+CwmuZO99AG/XDzn8DXjTJ2SLfmEyuGYAn/cyM/e+Ar6PiDdOSdLQuSqwNMHMd4DqYUnIhmUJcHoFWD3OZwFclLClgDT1HvwKGLdXgYeye9bVIOmPLgAA5suNk76k3AzMAfixW9qUNS50fY9QnW5a6KQldmq8eYn1Vtw9tRXeGhpvrZSnJs5b++itcfXWMntr1j2OCd4GFCKiYEI8GiWC/3soWxsHOyKxTE4rFLRcg3HwH6aQq6SSLPimAAAAAElFTkSuQmCC';

const list = ref([]);
const isAll = ref(false);
const isLoading = ref(false);
const dialogVisible = ref(false);
const remarks = ref('');
const daId = ref(0);
const address = ref('');
const AddressDialogVisible = ref(false);

const total = computed(() => {
  let total = 0;
  const filterList = list.value.filter(item => item.checked);
  if (filterList.length === 0) return total;
  filterList.forEach(item => {
    total += item.unitPrice * item.quantity;
  });
  return total;
});

const totalChecked = computed(() => {
  const filterList = list.value.filter(item => item.checked);
  return filterList.length;
});

const close = () => {
  daId.value = 0;
  address.value = '';
};

const getIcon = isChecked => {
  if (isChecked) return checkedCheckSrc;
  else return defaultCheckSrc;
};

const onCheck = item => {
  item.checked = !item.checked;
  const filterList = list.value.filter(item => item.checked);
  if (filterList.length === list.value.length) {
    isAll.value = true;
  } else {
    isAll.value = false;
  }
};

const checkAll = () => {
  if (isAll.value) {
    list.value.forEach(item => {
      item.checked = false;
    });
    isAll.value = false;
  } else {
    list.value.forEach(item => {
      item.checked = true;
    });
    isAll.value = true;
  }
};

const onNumberChange = async (item, type) => {
  if (type === 'add') {
    item.quantity += 1;
    const params = {
      ...item,
      quantity: 1,
    };
    await updateCart(params);
  }
  if (type === 'min') {
    item.quantity -= 1;
    if (item.quantity === 0) {
      // 删除删品
      await deleteCart(item.cartId);
    } else {
      const params = {
        ...item,
        quantity: -1,
      };
      await updateCart(params);
    }
  }
  const res = await getCartList();
  list.value = res;
};

const onAddressComfirm = info => {
  daId.value = info.daId;
  address.value = info.address;
};

const createOrder = async () => {
  const params = {
    remarks: remarks.value,
    orderDate: getCurrentDateTime(),
    daId: daId.value,
    cartItems: list.value.filter(item => item.checked),
  };
  isLoading.value = true;
  await createCartOrder(params);
  dialogVisible.value = false;
  ElMessage.success('结算成功');
  const res = await getCartList();
  list.value = res;
  isLoading.value = false;
};

onMounted(async () => {
  const res = await getCartList();
  list.value = res;
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .cart-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    .cart-header-item {
      min-height: 36px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 15px;
      color: #333;
      padding: 9px 0 5px;
      box-sizing: border-box;
      margin-left: 10px;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      .text-label {
        text-align: center;
        color: inherit;
        font-size: 12px;
        letter-spacing: 1px;
        word-break: normal;
      }
    }
    .cart-header-item:first-child {
      flex: 1;
      margin-left: 0;
    }
  }
  .cart-goods {
    width: 100%;
    .cart-goods-item {
      display: flex;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.3);
      margin-bottom: 10px;
      border-radius: 25px;
      padding: 20px 0 20px 20px;
      .item-checkbox {
        margin-right: 20px;
        .base-checkbox {
          line-height: 20px;
          cursor: pointer;
          border: none;
          background-color: transparent;
          border-radius: 50%;
          vertical-align: top;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .item-goods-info {
        display: flex;
        align-items: center;
        flex: 1;
        .img {
          width: 80px;
          height: 80px;
          background: #d8d8d8;
          border-radius: 20px;
          margin-right: 20px;
        }
        .name {
          font-size: 18px;
          font-weight: 500;
          color: #333;
          line-height: 25px;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }
        .flavor,
        .spec,
        .proposal {
          font-size: 12px;
          font-weight: 400;
          color: #333;
          line-height: 16px;
        }
      }
      .item-attr {
        width: 100px;
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        .price,
        .base-price {
          color: #cb986d;
          position: relative;
        }
        .base-counter {
          display: flex;
          align-items: center;
          .base-counter-minus,
          .base-counter-add {
            cursor: pointer;
          }
          .value {
            display: inline-block;
            min-width: 40px;
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            color: #333;
            line-height: 22px;
            vertical-align: middle;
          }
        }
      }
    }
  }
  .bottom {
    display: flex;
    background-color: rgb(250, 254, 255);
    z-index: 999;
    justify-content: space-between;
    align-items: center;
    padding: 0 180px;
    position: fixed;
    height: 65px;
    box-shadow: 0px -1px 0.5px rgba(65, 79, 93, 0.46);
    bottom: 0;
    left: 0;
    right: 0;
    &-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .checkbox {
        padding: 0 20px;
        .base-checkbox {
          line-height: 20px;
          cursor: pointer;
          border: none;
          background-color: transparent;
          border-radius: 50%;
          vertical-align: top;
          display: flex;
          align-items: center;
          justify-content: center;
          .select-all {
            padding-left: 10px;
            font-size: 18px;
          }
        }
      }
    }
    &-right {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .extra {
    margin-left: 10px;
    font-size: 12px;
    color: gray;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: rgb(222, 153, 247);
    }
  }
}
</style>
import AddressDialogVue from '../product/components/AddressDialog.vue';
