<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// TODO: Replace these images with local assets later
// Using placeholder images from original site for now
const teamMembers = ref([
  {
    id: 'yen-ngoc',
    name: 'Yến Ngọc',
    language: 'Tiếng Anh',
    experience: '5+',
    location: 'TPHCM',
    expertise: 'Phiên dịch về Marketing, MC song ngữ sự kiện, thu âm lồng tiếng Tiktok, Youtube, các TVC quảng cáo, am hiểu về (FMCG), ngành điện tử bán lẻ (Electronics Retails), ngành thời trang (Fashion) và có đam mê với lĩnh vực giáo dục (Education).',
    avatar: 'https://dichthuatphuongdong.com/wp-content/uploads/2021/07/translator-1.jpg'
  },
  {
    id: 'huyen-trang',
    name: 'Huyền Trang',
    language: 'Tiếng Hàn',
    experience: '10+',
    location: 'TPHCM',
    expertise: 'Kinh nghiệm làm việc với các dự án của chính phủ, các giao dịch thương mại, đầu tư, kinh nghiệm dịch cho các vụ án hình sự, dân sự, kinh tế. Thông dịch cabin, dịch đồng thời, dịch sân khấu.',
    avatar: 'https://dichthuatphuongdong.com/wp-content/uploads/2021/07/translator-2.jpg'
  },
  {
    id: 'my-linh',
    name: 'Mỹ Linh',
    language: 'Tiếng Hàn',
    experience: '10+',
    location: 'TPHCM',
    expertise: '10 năm kinh nghiệm làm phiên dịch viên tiếng Hàn: Dịch cho Cơ quan Chính phủ, dịch tháp tùng VIP, thương lượng đàm phán ký kết hợp đồng, ngành luật, ngành xây dựng,…',
    avatar: 'https://dichthuatphuongdong.com/wp-content/uploads/2021/07/translator-3.jpg'
  },
  {
    id: 'ngoc-anh',
    name: 'Ngọc Ánh',
    language: 'Tiếng Anh',
    experience: '9+',
    location: 'Hà Nội',
    expertise: 'Vietnam Airlines, Magnetic MRO, KP Aviation LLC and Magellan Aircraft Services LLP, NetApp, K Venture. Reliance Ltd, EuroSphere 2019,…',
    avatar: 'https://dichthuatphuongdong.com/wp-content/uploads/2021/07/translator-4.jpg'
  },
  {
    id: 'quynh-trang',
    name: 'Quỳnh Trang',
    language: 'Tiếng Hàn',
    experience: '9+',
    location: 'Đà Nẵng',
    expertise: 'Từng làm tại Shinhan Bank Vietnam; phiên dịch dự án của Samsung SDI, Samsung Display, Taekwang tại Hàn Quốc và các buổi tọa đàm thương mại, kinh doanh,…',
    avatar: 'https://dichthuatphuongdong.com/wp-content/uploads/2021/07/translator-5.jpg'
  },
  {
    id: 'le-lan',
    name: 'Lê Lan',
    language: 'Tiếng Hàn',
    experience: '7+',
    location: 'Hà Nội',
    expertise: 'Đã có trên 5 năm kinh nghiệm phiên dịch tiếng Hàn, đã từng làm việc với các tập đoàn lớn tại Việt Nam như Samsung, LG, Lotte, Daewoo.',
    avatar: 'https://dichthuatphuongdong.com/wp-content/uploads/2021/07/translator-6.jpg'
  }
])

const displayedMembers = ref(teamMembers.value.slice(0, 6))
</script>

<template>
  <section class="section bg-gray-50">
    <div class="container">
      <h2 class="section-title">Đội ngũ biên phiên dịch của chúng tôi</h2>
      <p class="section-subtitle">
        Hơn 500+ biên dịch viên và phiên dịch viên chuyên nghiệp, giàu kinh nghiệm
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div
          v-for="member in displayedMembers"
          :key="member.id"
          class="bg-white rounded-xl shadow-card overflow-hidden group hover:shadow-dropdown transition-all"
        >
          <!-- Avatar -->
          <div class="aspect-[4/3] bg-gray-100 relative overflow-hidden">
            <!-- TODO: Replace with local images -->
            <img
              :src="member.avatar"
              :alt="member.name"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <div class="text-sm opacity-80">{{ member.language }}</div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-5">
            <h3 class="font-bold text-gray-900 text-lg">{{ member.name }}</h3>
            <div class="flex items-center gap-4 mt-2 text-sm text-gray-500">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ member.experience }} năm
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {{ member.location }}
              </span>
            </div>
            <p class="text-gray-600 text-sm mt-3 line-clamp-2">
              {{ member.expertise }}
            </p>
            <RouterLink
              :to="`/nhan-su/${member.id}`"
              class="inline-flex items-center gap-1 mt-4 text-primary font-medium text-sm hover:text-primary-dark transition-colors"
            >
              Xem chi tiết
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="text-center mt-10">
        <p class="text-gray-500 mb-4">
          Và hàng trăm cộng tác viên khác tại 63 tỉnh thành và các quốc gia khác gồm (Nhật Bản, Hàn Quốc, Trung Quốc, Thái Lan v.v…)
        </p>
        <RouterLink to="/nhan-su" class="btn-outline">
          Xem thêm biên phiên dịch khác
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
