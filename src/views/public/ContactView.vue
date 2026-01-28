<script setup lang="ts">
import { ref } from 'vue'
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import AppButton from '@/components/common/AppButton.vue'

const form = ref({
  serviceType: '',
  name: '',
  title: '',
  phone: '',
  email: '',
  requirements: ''
})

const isSubmitting = ref(false)

async function handleSubmit() {
  isSubmitting.value = true
  // TODO: Submit to API
  setTimeout(() => {
    isSubmitting.value = false
    alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.')
  }, 1000)
}
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-16">
      <div class="container">
        <AppBreadcrumb :items="[{ label: 'Liên hệ' }]" class="mb-6 text-white/70" />
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Liên hệ với chúng tôi</h1>
        <p class="text-lg text-white/80 max-w-2xl">
          Để lại thông tin, chúng tôi sẽ liên hệ và tư vấn miễn phí cho bạn
        </p>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="section">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Form -->
          <div class="bg-white rounded-2xl shadow-card p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Nhận báo giá ngay</h2>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label class="label">Loại dịch vụ</label>
                <select v-model="form.serviceType" class="input" required>
                  <option value="">Chọn dịch vụ</option>
                  <option value="translation">Dịch thuật tài liệu</option>
                  <option value="interpretation">Phiên dịch</option>
                  <option value="video">Dịch Video/Subtitle</option>
                  <option value="game">Dịch Game/App</option>
                  <option value="website">Dịch Website</option>
                  <option value="visa">Dịch vụ Visa</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div class="grid sm:grid-cols-2 gap-6">
                <div>
                  <label class="label">Họ và tên</label>
                  <input v-model="form.name" type="text" class="input" placeholder="Nguyễn Văn A" required />
                </div>
                <div>
                  <label class="label">Chức danh</label>
                  <input v-model="form.title" type="text" class="input" placeholder="Giám đốc" />
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-6">
                <div>
                  <label class="label">Số điện thoại</label>
                  <input v-model="form.phone" type="tel" class="input" placeholder="0912345678" required />
                </div>
                <div>
                  <label class="label">Email</label>
                  <input v-model="form.email" type="email" class="input" placeholder="email@company.com" required />
                </div>
              </div>

              <div>
                <label class="label">Yêu cầu chi tiết</label>
                <textarea
                  v-model="form.requirements"
                  class="input"
                  rows="4"
                  placeholder="Mô tả chi tiết yêu cầu của bạn..."
                ></textarea>
              </div>

              <AppButton type="submit" variant="primary" size="lg" class="w-full" :loading="isSubmitting">
                Gửi yêu cầu báo giá
              </AppButton>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Thông tin liên hệ</h2>

              <!-- Offices -->
              <div class="space-y-6">
                <div class="bg-gray-50 rounded-xl p-6">
                  <h3 class="font-bold text-gray-900 mb-2">Trụ sở Hà Nội</h3>
                  <p class="text-gray-600 mb-2">149 Phố Khương Trung, Khương Đình, Thanh Xuân</p>
                  <a href="tel:0964333933" class="text-primary font-medium">0964.333.933</a>
                </div>

                <div class="bg-gray-50 rounded-xl p-6">
                  <h3 class="font-bold text-gray-900 mb-2">Chi nhánh TP.HCM</h3>
                  <p class="text-gray-600 mb-2">123 Đường ABC, Quận 1</p>
                  <a href="tel:0975419415" class="text-primary font-medium">0975.419.415</a>
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="bg-primary/5 rounded-xl p-6">
              <h3 class="font-bold text-gray-900 mb-2">Email</h3>
              <a href="mailto:contact@dichthuatphuongdong.com" class="text-primary">
                contact@dichthuatphuongdong.com
              </a>
            </div>

            <!-- Working Hours -->
            <div class="bg-gray-50 rounded-xl p-6">
              <h3 class="font-bold text-gray-900 mb-2">Giờ làm việc</h3>
              <p class="text-gray-600">Thứ 2 - Thứ 6: 8:00 - 18:00</p>
              <p class="text-gray-600">Thứ 7: 8:00 - 12:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
