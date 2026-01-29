<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import { usePricingStore } from '@/stores'

const pricingStore = usePricingStore()

onMounted(() => {
  pricingStore.fetchInterpretationPricing()
})

const levels = [
  {
    key: 'level1',
    number: '1',
    title: 'Không chuyên ngành',
    description: 'Dịch thuật cơ bản cho các tình huống thông thường',
    uses: [
      'Du lịch, Thăm quan, Giải trí',
      'Trao đổi mua bán đơn giản',
      'Đám cưới, khám chữa bệnh'
    ]
  },
  {
    key: 'level2',
    number: '2',
    title: 'Trung cấp (Kinh nghiệm, chuyên ngành)',
    description: 'Dịch thuật chuyên nghiệp cho công việc kinh doanh',
    uses: [
      'Hiện trường, công tác dài ngày',
      'Tháp tùng thương mại',
      'Hội thảo nhỏ',
      'Kỹ thuật, chuyên ngành'
    ]
  },
  {
    key: 'level3',
    number: '3',
    title: 'Cao cấp (Nhiều kinh nghiệm, am hiểu sâu chuyên ngành)',
    description: 'Dịch thuật cấp cao cho sự kiện quan trọng',
    uses: [
      'Phiên dịch Cabin',
      'Hội thảo lớn',
      'Tháp tùng cấp cao',
      'Hội nghị truyền hình'
    ]
  }
]

const features = [
  {
    icon: '✓',
    title: 'Chất lượng đảm bảo',
    description: 'Chúng tôi cam kết mang đến dịch vụ phiên dịch chất lượng cao với đội ngũ phiên dịch viên giàu kinh nghiệm và chuyên môn. Mỗi phiên dịch viên tại Dịch Thuật Phương Đông đều trải qua quá trình tuyển chọn và đào tạo khắt khe để đảm bảo mọi bản dịch đều chính xác và mượt mà.'
  },
  {
    icon: '🌍',
    title: 'Đa dạng ngôn ngữ',
    description: 'Với khả năng phiên dịch đa dạng từ các ngôn ngữ phổ biến như Anh, Pháp, Nhật, Hàn cho đến các ngôn ngữ hiếm hơn, chúng tôi tự tin đáp ứng mọi nhu cầu phiên dịch của bạn, dù là hội nghị quốc tế, tài liệu chuyên ngành hay giao tiếp kinh doanh.'
  },
  {
    icon: '💰',
    title: 'Giá cả cạnh tranh',
    description: 'Hiểu rõ tầm quan trọng của chi phí trong quyết định của bạn, chúng tôi xây dựng bảng giá tham khảo hợp lý và linh hoạt với nhiều ưu đãi hấp dẫn.'
  },
  {
    icon: '🤝',
    title: 'Dịch vụ tận tâm',
    description: 'Đội ngũ tư vấn viên của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7, đảm bảo rằng bạn sẽ nhận được giải pháp phiên dịch phù hợp nhất với nhu cầu của mình.'
  }
]

const notes = [
  'Giá trên chỉ là tham khảo và chưa bao gồm thuế VAT (VAT = 10%)',
  'Báo giá này được áp dụng tại các thành phố Hà Nội, Đà Nẵng, Hồ Chí Minh. Các tỉnh lân cận hoặc vùng sâu vui lòng liên hệ trước',
  'Thời gian làm việc 1 ngày tối đa 8 Giờ, thời gian thêm giờ tính Hệ số 1.5',
  'Trong trường hợp cần đi công tác dài ngày: Chi phí đi lại, ăn, ở của Phiên dịch do bên phía khách hàng chi trả',
  'Giá trên áp dụng với Phiên dịch ngắn ngày (dưới 3 ngày), các dự án cần số lượng lớn phiên dịch viên hoặc phiên dịch dài ngày Quý khách hàng vui lòng liên hệ trực tiếp số Hotline: 0964.333.933 / 0975.419.415 để nhận được mức Giá Tốt hơn',
  'Ưu đãi giảm giá 5% – 10% khi khách hàng sử dụng dịch vụ vào những lần tiếp theo',
  'Các phiên dịch viên được lựa chọn là những người có kinh nghiệm và am hiểu về lĩnh vực phiên dịch',
  'Quý khách có thể kiểm tra trước trình độ và hình thức của phiên dịch viên trước khi ký hợp đồng',
  'Giá phiên dịch thực tế phụ thuộc vào mức độ khó của buổi phiên dịch. Chi phí thông dịch, phiên dịch thực tế có thể sẽ khác tùy theo nhu cầu cụ thể, khu vực của Quý khách',
  'Nếu bạn cần dịch các văn bản, tài liệu chứ không phải dịch nói giao tiếp gặp gỡ với đối tác nước ngoài? Hãy xem mục báo giá dịch thuật để biết chi phí cho dịch vụ này',
  'Giá phiên dịch tiếng Anh, tiếng Nhật, tiếng Hàn, tiếng Trung,… theo giờ thường cao hơn theo ngày hoặc trọn gói và thường có phí phát sinh nếu quá giờ thỏa thuận trước nên tốt nhất bạn nên chọn dịch vụ trọn gói hoặc theo buổi'
]

const stats = [
  { value: '03', label: 'Cấp độ' },
  { value: '04', label: 'Loại hình' },
  { value: '50+', label: 'Ngôn ngữ' },
  { value: '100%', label: 'Hài lòng' }
]
</script>

<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <section class="relative py-12 md:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <AppBreadcrumb :items="[{ label: 'Báo giá phiên dịch' }]" class="mb-6" />

          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Báo giá phiên dịch <span class="text-yellow-300">03 cấp độ</span>
          </h1>

          <p class="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            04 loại hình · 50+ ngôn ngữ chất lượng cao. Tiết kiệm chi phí với quy trình tối ưu.
          </p>

          <!-- Circular Stats Badges -->
          <div class="flex flex-wrap justify-center gap-8 mt-10">
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 mb-2">
                <span class="text-2xl md:text-3xl font-bold">03</span>
              </div>
              <span class="text-sm text-white/90">Cấp độ</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 mb-2">
                <span class="text-2xl md:text-3xl font-bold">04</span>
              </div>
              <span class="text-sm text-white/90">Loại hình</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 mb-2">
                <span class="text-2xl md:text-3xl font-bold">50+</span>
              </div>
              <span class="text-sm text-white/90">Ngôn ngữ</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 mb-2">
                <span class="text-2xl md:text-3xl font-bold">100%</span>
              </div>
              <span class="text-sm text-white/90">Hài lòng</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Wave Divider -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-12 md:h-16">
          <path fill="#f9fafb" d="M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,58.7C672,64,768,64,864,58.7C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"></path>
        </svg>
      </div>
    </section>

    <!-- Level Explanation Section -->
    <section class="py-12 md:py-16">
      <div class="container">
        <div class="text-center mb-10">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Bảng báo giá phiên dịch 03 cấp độ
          </h2>
          <p class="text-base text-gray-600 max-w-3xl mx-auto">
            Bạn đang tìm kiếm dịch vụ phiên dịch chuyên nghiệp, đáng tin cậy và giá cả phải chăng?
            <span class="font-semibold text-blue-600">Dịch Thuật Phương Đông</span> tự hào mang đến giải pháp hoàn hảo.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div
            v-for="level in levels"
            :key="level.key"
            class="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all"
          >
            <!-- Header with Number Badge -->
            <div class="flex items-start justify-between mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">
                {{ level.number }}
              </div>
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ level.title }}</h3>

            <!-- Uses List -->
            <ul class="space-y-2 mb-4">
              <li
                v-for="(use, index) in level.uses"
                :key="index"
                class="flex items-start gap-2 text-sm text-gray-600"
              >
                <svg class="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>{{ use }}</span>
              </li>
            </ul>

            <!-- Divider -->
            <div class="border-t border-gray-100 pt-3 mt-auto">
              <div class="flex items-center gap-1 text-xs text-gray-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                8 giờ/ngày
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Price Table Section -->
    <section class="py-12 md:py-16 bg-white">
      <div class="container">
        <div class="text-center mb-10">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Bảng giá chi tiết
          </h2>
          <p class="text-sm text-gray-500">
            Giá tham khảo (USD/ngày 8 giờ) - Cập nhật 09/07/2025
          </p>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table class="w-full">
              <thead>
                <tr class="bg-blue-600 text-white">
                  <th class="px-4 md:px-6 py-4 text-left font-semibold text-sm md:text-base">Ngôn ngữ</th>
                  <th class="px-4 md:px-6 py-4 text-center font-semibold text-sm md:text-base">Cấp 1</th>
                  <th class="px-4 md:px-6 py-4 text-center font-semibold text-sm md:text-base">Cấp 2</th>
                  <th class="px-4 md:px-6 py-4 text-center font-semibold text-sm md:text-base">Cấp 3</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr
                  v-for="price in pricingStore.interpretationPricing"
                  :key="price.id"
                  class="hover:bg-blue-50 transition-colors"
                >
                  <td class="px-4 md:px-6 py-4 font-medium text-gray-900 text-sm md:text-base">
                    {{ price.language }}
                  </td>
                  <td class="px-4 md:px-6 py-4 text-center">
                    <span class="text-green-600 font-semibold text-sm md:text-base">
                      ${{ price.level1.min }} – ${{ price.level1.max }}
                    </span>
                  </td>
                  <td class="px-4 md:px-6 py-4 text-center">
                    <span class="text-blue-600 font-semibold text-sm md:text-base">
                      ${{ price.level2.min }} – ${{ price.level2.max }}
                    </span>
                  </td>
                  <td class="px-4 md:px-6 py-4 text-center">
                    <span class="text-purple-600 font-semibold text-sm md:text-base">
                      ${{ price.level3.min }} – ${{ price.level3.max }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- CTA -->
          <div class="text-center mt-8">
            <a
              href="tel:0964333933"
              class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Nhận báo giá: 0964.333.933
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Important Notes Section -->
    <section class="py-12 md:py-16">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <div class="bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-100">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 class="text-xl md:text-2xl font-bold text-gray-900">
                Thông tin cần lưu ý
              </h2>
            </div>

            <div class="space-y-3">
              <div
                v-for="(note, index) in notes"
                :key="index"
                class="flex items-start gap-3"
              >
                <div class="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span class="text-white text-xs font-bold">{{ index + 1 }}</span>
                </div>
                <p class="text-gray-700 text-sm leading-relaxed">{{ note }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-12 md:py-16 bg-white">
      <div class="container">
        <div class="text-center mb-10">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Tại sao chọn Dịch Thuật Phương Đông?
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="flex items-start gap-4 p-5 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors"
          >
            <div class="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <span class="text-white text-lg">{{ feature.icon }}</span>
            </div>
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
              <p class="text-gray-600 text-sm leading-relaxed">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-2xl md:text-4xl font-bold mb-4">
            Bạn cần báo giá phiên dịch ngay?
          </h2>
          <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Hỗ trợ 24/7, phục vụ toàn quốc, cam kết hài lòng 100%
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <router-link
              to="/lien-he"
              class="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Liên hệ ngay
            </router-link>

            <a
              href="tel:0964333933"
              class="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0964.333.933
            </a>
          </div>

          <div class="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              500+ cộng tác viên
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              6000+ khách hàng
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Cam kết 100%
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
