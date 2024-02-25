<template>
  <div class="main">
    <div class="detail">
      <div class="img">
        <img
          class="cover-img"
          src="https://p1-cdn-holiland.1900m.com/goods/cover_s/202308/11/2922a1691744698b6773.jpg?x-oss-process=image/resize,m_fill,limit_0,w_630,h_630"
        />
      </div>
      <div class="info">
        <div class="base-card info-item">
          <div class="base-card-inner">
            <div class="name">教师节蛋糕-桃李春风</div>
            <div class="price">
              <span class="base-price">¥ 239</span>
            </div>
          </div>
        </div>
        <div class="base-card info-item">
          <div class="title">口味选择</div>
          <el-radio-group v-model="radio1">
            <el-radio label="酸奶提子口味">酸奶提子口味</el-radio>
            <el-radio label="凤梨生椰口味">凤梨生椰口味</el-radio>
            <el-radio label="双莓慕斯鲜果口味">双莓慕斯鲜果口味</el-radio>
            <el-radio label="玫瑰慕斯+草莓口味">玫瑰慕斯+草莓口味 </el-radio>
          </el-radio-group>
          <div class="title">规格选择</div>
          <el-radio-group v-model="radio2">
            <el-radio label="Φ14cm*h7cm "
              >Φ14cm*h7cm
              <div class="extra">（建议2至4人食用）</div>
            </el-radio>
            <el-radio label="Φ14cm*h8cm "
              >Φ14cm*h8cm
              <div class="extra">（建议2至4人食用）</div>
            </el-radio>
          </el-radio-group>
        </div>
        <div class="base-card info-item">
          <div class="base-card-inner">
            <div class="descriptions goods">
              <div class="title">送至</div>
              <div class="content">
                <span class="to-address">四川省 成都市 锦江区 锦官驿街道</span
                ><el-button type="text" class="text-button"><span>更改</span></el-button>
              </div>
            </div>

            <div class="action">
              <div class="base-counter large">
                <span class="base-counter-minus disabled"
                  ><img
                    class="base-icon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAMAAAAPzWOAAAAAAXNSR0IArs4c6QAAAMlQTFRFAAAAtpJt27Zt1ayI1qiL1auG1KmF0qJ606eC1aiF0KJ7zJpw0KN70KN9zp50zp1yz551zp51zp52zZxzz6F5zp52z594z6B4zZxzzptyzp51zJpwzJltzJpvy5hty5luy5lvzJtxzZ10zp520qaB1q6N2LGQ2LGR27eZ27ib3b2h38Cm5Mq05cu25c246dPB7NnK8+fd9Ong9Onh9evi9evj+PHq+PLs+PLt+/f0/Pj2/fr4/fv6/vz7/v39/v79/v7+///+////vWxkswAAAB50Uk5TAAcHKyw9R1pibXyGjZmgprPCwtPg8PDw9/j5/f7+kROJKgAAAitJREFUWMOtmNl6KVEQRitkIMQ8awvRjjnomEOw3/+hcuHkHBGS7lbrzoX1fb2H2vWXyEWC4UgikytVKqVcJhEJB8UrgVA8ywnZeCjgQXEXK3CWQuzOpeI+aQHQaPdHzny52SznzqjfbgBgJe9dKG5TANgDZ2u+sHUGNgCp218UN9EyUOuO9+YM+3G3BpSjNz85gmmg2puZi8x6VSD9w1Y9FIHm1PzItAkUHy45Hi2oD3fmF3bDOliP5x1PgD0xLpjYwNMlR2tlXLFqnbc8Ap21ccm6A3z7ogcLOu/GNe8dsE5WN1iE1tp4YN2C4pedvkmDvTKeWNmQPj51UahPjEcmdYge3ZcyDI1nhlD+f49S0Nx5l+yakPp396E6NT6YVuGzMiShZ3zRg+TfOmZRm/mTzGpYh1oXg67xSRdiIiKBAoz9SsZQCIhICOy9X8nehpCIxGFgfDOAuIhk4dW/xIGsSBAaW/+SbQOCEoa2uYI2hCUC/WskfYhIAkbXSEaQkAw410gcyEgeFtdIFpCXEiw/q8zLwDUvnzVsCSWpwObw8+0ZDzy/Hf61gYqOROVzcjC/ZmHnkNPZYpXDpnLsVS6gSimQ7FUreyhKOuVRpVCrPBkqj5fOM6ryoOu0FipNjk67pdL46bSgfprhP6fNsE5brhMQdKKKTmjSiW86QVIn0uqE6+OY/3oa81/dxvxvA4fFcrNZLrwOHJRGH0pDmKNxUL5UqZTyv4yDPgB2PjeYH3uH7gAAAABJRU5ErkJggg=="
                    alt="reduce-34"
                    style="width: 34px; height: 34px" /></span
                ><span class="value">1</span
                ><span class="base-counter-add"
                  ><img
                    class="base-icon"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAAXNSR0IArs4c6QAAAHhQTFRFAAAA1Kp/zJlmyJJtxZdo0aJozJlwzphvy5dsy5hvzJltzJlsy5ltyphuzJhuzJhtzJluy5htyphszJhty5huzJhty5hty5hty5hty5ltzJhtzJhuzJltzJhty5hty5dtzJlty5hty5lv38Cm4sau5cu28uXa////VmGP5QAAACF0Uk5TAAYKDhYWGT5ARUZVcHmVn6Wys73BwsPGzt7f6+/4+fv+JjDK5gAAAWRJREFUSMe1l9uSgkAMRBsUEeUuKwICE0Hn///QB1d21QEx2e0nCuoUgVymAxhle0GUF1VdV0UeBZ6N2XL8rKEHNZnvzELdpCWD2sR9i673NKr9ehJdxYompOLVOLs90hsdtyOoFSp6KxVaJnaxo1naLV7Z5YFm6rB8ea+JPfX9yUQ/vdsyxtxp3Rkjf/zu0BjgWeuz8UH4kCP1Gax+ZWw1kt9RmI4/1RLTpzDFQz2rz2F1r/PRXpiA6eu7B4kD061DUx6cAoDT8uDWAeATDyYfQMaFM8BuuHBjY0NcmDwEfDhAxIcj5Hw4R8mHS1TDzOnOz7pofXm52Q2TqUJ9v+z1TPV3opbBorAL/g8rZKkSFYmoPD1JY4haUjQMZGNINAC5ozeRD33ecbP/i4NOdMTKDneRrZAZGpmVEpk4mX2UGVeZZZaZdeGaIFtQAMBNzatR6v73UnZbBzdBlJdVXVflxDp4BY5ccEKkcprrAAAAAElFTkSuQmCC"
                    alt="plus-34"
                    style="width: 34px; height: 34px"
                /></span>
              </div>
              <div class="buttons">
                <el-button round> <span class="">加入购物车</span></el-button
                ><el-button type="primary" round>
                  <span class="">立即购买</span>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SplitText :noSearch="true" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SplitText from '@/components/SplitText.vue';

const radio1 = ref('1');
const radio2 = ref('2');
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  .detail {
    display: flex;
    height: 634px;
    align-items: stretch;
    .img {
      width: 630px;
      flex-shrink: 0;
      .cover-img {
        width: 100%;
        height: 630px;
        border-radius: 20px;
      }
    }
    .info {
      min-width: 438px;
      margin-left: 15px;
      .base-card {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 20px;
        padding: 20px;
        overflow: hidden;
        .base-card-inner {
          .action {
            display: flex;
            justify-content: space-between;
            margin-top: 28px;
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
                font-size: 21px;
                font-weight: 500;
                text-align: center;
                color: #333;
                line-height: 22px;
                vertical-align: middle;
              }
            }
          }
          .descriptions {
            display: flex;
            margin-bottom: 12px;
            .title {
              font-size: 14px;
              font-weight: 400;
              color: rgba(51, 51, 51, 0.5);
              line-height: 20px;
              min-width: 56px;
              margin-right: 20px;
            }
            .content {
              font-size: 14px;
              flex: 1;
              font-weight: 400;
              color: #333;
              line-height: 20px;
              display: flex;
              justify-content: space-between;
            }
          }
          .name {
            font-size: 21px;
            font-weight: 500;
            color: #333;
            line-height: 29px;
            letter-spacing: 1px;
          }
          .price {
            font-size: 21px;
            font-weight: 500;
            color: #cb986d;
            line-height: 29px;
            vertical-align: top;
            white-space: nowrap;
          }
        }
      }
      .info-item {
        margin-bottom: 15px;
        .title {
          font-size: 16px;
          font-weight: 500;
          color: #333;
          line-height: 22px;
          margin: 10px 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        .title:first-child {
          margin-top: 0;
        }
        .el-radio__label {
          display: flex;
        }
        .extra {
          font-size: 12px;
          font-weight: 400;
          color: #333;
          line-height: 17px;
        }
      }
    }
  }
}
</style>
