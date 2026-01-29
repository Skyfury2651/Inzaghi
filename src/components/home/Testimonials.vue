<script setup lang="ts">
import { ref } from 'vue'

// TODO: Replace these images with local assets later
// Using placeholder images for now
const testimonials = ref([
  {
    id: 1,
    name: 'Hoàng Nguyên',
    company: 'Dcorp Technology',
    avatar: 'https://dichthuatphuongdong.com/wp-content/uploads/2021/07/customer-1.jpg',
    quote: 'Cảm thấy hài lòng với dịch vụ bên Qúy công ty. Nếu có yêu cầu hỗ trợ dịch vụ, tôi sẽ liên hệ cho lần tiếp theo.',
    rating: 5
  },
  {
    id: 2,
    name: 'Mr Phương',
    company: 'Cơ Khí và Xây dựng Đông Sơn',
    avatar: 'https://dichthuatphuongdong.com/wp-content/uploads/2021/07/customer-2.jpg',
    quote: 'Cám ơn quý khách đã hợp tác với công ty chúng tôi, chúng tôi đánh giá cao tính chuyên nghiệp của phiên dịch viên mà quý công ty cung cấp. Hi vọng sau này có nhiều lần hợp tác với quý công ty.',
    rating: 5
  },
  {
    id: 3,
    name: 'Thanh Tuấn',
    company: 'XNK Hải Đăng',
    avatar: 'https://dichthuatphuongdong.com/wp-content/uploads/2021/07/customer-3.jpg',
    quote: 'Phiên dịch viên làm việc rất chuyên nghiệp, đối tác của chúng tôi rất hài lòng. Tôi sẽ tiếp tục sử dụng dịch vụ của các bạn khi cần đến.',
    rating: 5
  },
  {
    id: 4,
    name: 'Mr Tak Shin',
    company: 'Hallym Burn Foundation',
    avatar: 'https://dichthuatphuongdong.com/wp-content/uploads/2021/07/customer-4.jpg',
    quote: 'Our foundation visited Vietnam for free treatment a week ago. And thanks to your translators, we could done it without problem.',
    rating: 5
  },
  {
    id: 5,
    name: 'Ms Yến Ngọc',
    company: 'Sao Kim Branding TP.HCM',
    avatar: 'https://dichthuatphuongdong.com/wp-content/uploads/2021/07/customer-5.jpg',
    quote: 'Chúng tôi thiết kế company profile, brochure, brand identity song ngữ nên có nhu cầu dịch thuật thường xuyên. Phương Đông đã đáp ứng được tiêu chí: Dịch Nhanh – Dịch chuẩn chuyên ngành của chúng tôi.',
    rating: 5
  }
])

// Helper to render star rating
function renderStars(rating: number) {
  return Array(5).fill(0).map((_, i) => i < rating)
}
</script>

<template>
  <section class="section">
    <div class="container">
      <h2 class="section-title">Khách hàng nói về chúng tôi</h2>
      <p class="section-subtitle">
        Được tin tưởng bởi hơn 6000+ khách hàng trong và ngoài nước
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-white rounded-xl shadow-card p-6 hover:shadow-dropdown transition-all"
        >
          <!-- Rating Stars -->
          <div class="flex gap-1 mb-4">
            <svg
              v-for="(filled, i) in renderStars(testimonial.rating)"
              :key="i"
              class="w-5 h-5"
              :class="filled ? 'text-yellow-400' : 'text-gray-300'"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>

          <!-- Quote -->
          <p class="text-gray-600 italic mb-6 line-clamp-4">
            "{{ testimonial.quote }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <!-- TODO: Replace with local images -->
            <img
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="w-12 h-12 rounded-full object-cover bg-gray-200"
            />
            <div>
              <div class="font-bold text-gray-900">{{ testimonial.name }}</div>
              <div class="text-sm text-gray-500">{{ testimonial.company }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12">
        <router-link to="/khach-hang" class="btn-outline">
          Xem tất cả khách hàng
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>
