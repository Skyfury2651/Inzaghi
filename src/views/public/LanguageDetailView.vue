<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import AppBreadcrumb from '@/components/common/AppBreadcrumb.vue'
import AppButton from '@/components/common/AppButton.vue'
import TrustedPartners from '@/components/home/TrustedPartners.vue'
import StatisticsCounter from '@/components/home/StatisticsCounter.vue'
import TeamShowcase from '@/components/home/TeamShowcase.vue'
import Testimonials from '@/components/home/Testimonials.vue'
import { useSettingsStore } from '@/stores'

const route = useRoute()
const lang = route.params.lang as string

const settingsStore = useSettingsStore()

const language = computed(() => {
  return settingsStore.languages.find(l => l.code === lang) || {
    code: lang,
    name: lang.charAt(0).toUpperCase() + lang.slice(1),
    nameVi: 'Ngôn ngữ',
    flag: '',
    translationUrl: `/dich-thuat-tieng-${lang}`
  }
})

const services = [
  { type: 'Dịch thuật tài liệu', desc: 'Hợp đồng, báo cáo, hồ sơ, tài liệu kỹ thuật, y tế, pháp lý...', icon: '📄' },
  { type: 'Phiên dịch', desc: 'Hội nghị, hội thảo, đàm phán, cabin, tháp tùng, online...', icon: '🎤' },
  { type: 'Dịch Website/App', desc: 'Bản địa hóa website và ứng dụng di động', icon: '💻' },
  { type: 'Dịch Video/Subtitle', desc: 'Phụ đề video, phim, giáo trình, nội dung đa phương tiện', icon: '🎬' }
]

const industries = [
  'Kỹ thuật & Công nghệ',
  'Y tế & Chăm sóc sức khỏe',
  'Tài chính & Ngân hàng',
  'Pháp lý & Hợp đồng',
  'Marketing & Quảng cáo',
  'Giáo dục & Đào tạo',
  'Thương mại điện tử',
  'Sản xuất & Công nghiệp'
]

const pricing = [
  { pair: 'Tiếng Việt → ' + language.value.nameVi, standard: '50.000đ', specialized: '65.000đ' },
  { pair: language.value.nameVi + ' → Tiếng Việt', standard: '55.000đ', specialized: '70.000đ' },
  { pair: language.value.nameVi + ' → Tiếng Anh', standard: '60.000đ', specialized: '75.000đ' },
  { pair: 'Tiếng Anh → ' + language.value.nameVi, standard: '65.000đ', specialized: '80.000đ' }
]
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-primary via-primary-dark to-secondary text-white py-16 md:py-20">
      <div class="container">
        <AppBreadcrumb
          :items="[
            { label: 'Ngôn ngữ', to: '/ngon-ngu-dich' },
            { label: language.nameVi }
          ]"
          class="mb-6 text-white/70"
        />
        <div class="flex items-center gap-4 md:gap-6">
          <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-2xl flex items-center justify-center text-4xl md:text-5xl">
            {{ language.flag || language.code.toUpperCase() }}
          </div>
          <div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">Dịch thuật {{ language.nameVi }}</h1>
            <p class="text-lg md:text-xl text-white/80 mt-2">{{ language.name }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Trusted Partners -->
    <TrustedPartners />

    <!-- Services -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Dịch vụ {{ language.nameVi }} của chúng tôi</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div
            v-for="service in services"
            :key="service.type"
            class="bg-white rounded-xl p-6 shadow-card text-center hover:shadow-dropdown transition-all"
          >
            <div class="text-4xl mb-3">{{ service.icon }}</div>
            <h3 class="font-bold text-gray-900 mb-2">{{ service.type }}</h3>
            <p class="text-gray-600 text-sm">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries -->
    <section class="section bg-gray-50">
      <div class="container">
        <h2 class="section-title">Các lĩnh vực chuyên biệt</h2>
        <p class="text-center text-gray-600 max-w-2xl mx-auto">
          Đội ngũ biên dịch viên chuyên ngành của chúng tôi có kinh nghiệm trong nhiều lĩnh vực khác nhau
        </p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div
            v-for="industry in industries"
            :key="industry"
            class="bg-white rounded-lg p-4 shadow-card hover:shadow-md transition-all text-center"
          >
            <span class="text-gray-700 font-medium">{{ industry }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Bảng giá dịch thuật {{ language.nameVi }}</h2>
        <p class="text-center text-gray-600">Giá tham khảo (VNĐ/trang 300 từ)</p>

        <div class="overflow-x-auto mt-8">
          <table class="w-full bg-white rounded-xl shadow-card overflow-hidden">
            <thead class="bg-primary text-white">
              <tr>
                <th class="px-6 py-4 text-left">Cặp ngôn ngữ</th>
                <th class="px-6 py-4 text-right">Giá tiêu chuẩn</th>
                <th class="px-6 py-4 text-right">Giá chuyên ngành</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr
                v-for="(price, index) in pricing"
                :key="index"
                class="hover:bg-gray-50"
              >
                <td class="px-6 py-4 font-medium">{{ price.pair }}</td>
                <td class="px-6 py-4 text-right text-primary font-bold">{{ price.standard }}</td>
                <td class="px-6 py-4 text-right text-secondary font-bold">{{ price.specialized }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-sm text-gray-500 text-center mt-4">
          * Giá trên chưa bao gồm VAT 10%. Giá có thể thay đổi tùy thuộc vào độ khó và khối lượng tài liệu.
        </p>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section bg-gray-50">
      <div class="container">
        <h2 class="section-title">Tại sao chọn dịch vụ {{ language.nameVi }} của chúng tôi?</h2>
        <div class="grid md:grid-cols-3 gap-6 mt-12">
          <div class="bg-white rounded-xl p-6 shadow-card">
            <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Chất lượng đảm bảo</h3>
            <p class="text-gray-600 text-sm">Quy trình kiểm soát chất lượng 3 bước, đảm bảo độ chính xác cao</p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-card">
            <div class="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Giao hàng đúng hạn</h3>
            <p class="text-gray-600 text-sm">Cam kết hoàn thành đúng tiến độ, đảm bảo kịp tiến độ của bạn</p>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-card">
            <div class="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Đội ngũ chuyên nghiệp</h3>
            <p class="text-gray-600 text-sm">Biên dịch viên bản ngữ, có chứng chỉ và kinh nghiệm lâu năm</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Quy trình làm việc</h2>
        <div class="max-w-4xl mx-auto mt-12">
          <div class="space-y-6">
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div class="bg-white rounded-xl p-6 shadow-card flex-1">
                <h3 class="font-bold text-gray-900 mb-2">Tiếp nhận yêu cầu</h3>
                <p class="text-gray-600">Nhận tài liệu và phân tích yêu cầu, báo giá trong vòng 30 phút</p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div class="bg-white rounded-xl p-6 shadow-card flex-1">
                <h3 class="font-bold text-gray-900 mb-2">Phân công và dịch thuật</h3>
                <p class="text-gray-600">Phân công cho biên dịch viên chuyên ngành phù hợp nhất</p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div class="bg-white rounded-xl p-6 shadow-card flex-1">
                <h3 class="font-bold text-gray-900 mb-2">Kiểm tra và hiệu đính</h3>
                <p class="text-gray-600">Kiểm tra, hiệu đính và đảm bảo chất lượng trước khi bàn giao</p>
              </div>
            </div>
            <div class="flex gap-6">
              <div class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div class="bg-white rounded-xl p-6 shadow-card flex-1">
                <h3 class="font-bold text-gray-900 mb-2">Bàn giao và hỗ trợ</h3>
                <p class="text-gray-600">Bàn giao sản phẩm và hỗ trợ chỉnh sửa miễn phí sau bàn giao</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics -->
    <StatisticsCounter />

    <!-- Team Showcase -->
    <TeamShowcase />

    <!-- Testimonials -->
    <Testimonials />

    <!-- CTA with Quote Form -->
    <section class="py-16 md:py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Nhận báo giá dịch thuật {{ language.nameVi }}</h2>
          <p class="text-white/80 mb-8">Gửi tài liệu để nhận báo giá chi tiết và miễn phí</p>
          <AppButton variant="white" size="lg" to="/lien-he" class="shadow-lg">
            Nhận báo giá ngay
          </AppButton>
        </div>
      </div>
    </section>

    <!-- Contact Info -->
    <section class="section bg-gray-50">
      <div class="container">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Hotline Hà Nội</h3>
            <a href="tel:0964333933" class="text-primary font-bold text-lg hover:text-primary-dark">0964.333.933</a>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">Email</h3>
            <a href="mailto:contact@dichthuatphuongdong.com" class="text-primary font-bold text-lg hover:text-primary-dark">contact@dichthuatphuongdong.com</a>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">VPGD Hà Nội</h3>
            <p class="text-gray-600">149 Phố Khương Trung, Khương Đình, Thanh Xuân</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
