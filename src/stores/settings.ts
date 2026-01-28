import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { SiteSettings, NavItem, Language } from '@/types'

export const useSettingsStore = defineStore('settings', () => {
  const settings = ref<SiteSettings>({
    companyName: 'ELITA',
    companyNameVi: 'Dịch Thuật Phương Đông',
    phones: ['0964.333.933', '0975.419.415'],
    emails: ['contact@dichthuatphuongdong.com', 'sales@elita.com.vn'],
    addresses: [
      {
        city: 'Hà Nội',
        address: '149 Phố Khương Trung, Khương Đình, Thanh Xuân',
        phone: '0964.333.933',
        isHeadquarters: true
      },
      {
        city: 'Hồ Chí Minh',
        address: '123 Đường ABC, Quận 1',
        phone: '0975.419.415',
        isHeadquarters: false
      }
    ],
    socialMedia: {
      facebook: 'https://facebook.com/dichthuatphuongdong',
      linkedin: 'https://linkedin.com/company/dichthuatphuongdong',
      youtube: 'https://youtube.com/@dichthuatphuongdong',
      zalo: 'https://zalo.me/0964333933'
    },
    bankInfo: {
      bankName: 'Vietcombank',
      accountNumber: '1234567890',
      accountHolder: 'CÔNG TY TNHH DỊCH VỤ & THƯƠNG MẠI ELITA',
      branch: 'Chi nhánh Hà Nội'
    },
    registration: {
      businessNumber: '0107813777',
      issuedDate: '2017-04-24',
      issuedBy: 'Sở Kế hoạch và Đầu tư Thành phố Hà Nội'
    },
    promoCode: {
      code: 'DTPD10',
      discount: 10,
      active: true
    }
  })

  const mainNavigation = ref<NavItem[]>([
    {
      label: 'Dịch Thuật',
      to: '/dich-thuat',
      children: [
        { label: 'Dịch Website', to: '/dich-thuat/website' },
        { label: 'Dịch Game', to: '/dich-thuat/game' },
        { label: 'Dịch App/Phần mềm', to: '/dich-thuat/phan-mem' },
        { label: 'Dịch Video/Subtitle', to: '/dich-thuat/video-subtitle' },
        { label: 'Dịch hợp đồng', to: '/dich-thuat/hop-dong' },
        { label: 'Dịch hồ sơ năng lực', to: '/dich-thuat/ho-so-nang-luc' },
        { label: 'Dịch báo cáo tài chính', to: '/dich-thuat/bao-cao-tai-chinh' }
      ]
    },
    {
      label: 'Phiên dịch',
      to: '/phien-dich',
      children: [
        { label: 'Phiên dịch Tiếng Anh', to: '/phien-dich/tieng-anh' },
        { label: 'Phiên dịch Tiếng Nhật', to: '/phien-dich/tieng-nhat' },
        { label: 'Phiên dịch Tiếng Hàn', to: '/phien-dich/tieng-han' },
        { label: 'Phiên dịch Tiếng Trung', to: '/phien-dich/tieng-trung' },
        { label: 'Phiên dịch hội thảo', to: '/phien-dich/hoi-thao' },
        { label: 'Phiên dịch Cabin', to: '/phien-dich/cabin' },
        { label: 'Phiên dịch Online', to: '/phien-dich/online' }
      ]
    },
    {
      label: 'Bảng giá',
      children: [
        { label: 'Báo giá dịch thuật', to: '/bao-gia-dich-thuat' },
        { label: 'Báo giá phiên dịch', to: '/bao-gia-phien-dich' }
      ]
    },
    {
      label: 'Visa',
      to: '/visa',
      children: [
        { label: 'Visa Hàn Quốc', to: '/visa/han-quoc' },
        { label: 'Visa Trung Quốc', to: '/visa/trung-quoc' },
        { label: 'Visa Nhật Bản', to: '/visa/nhat-ban' },
        { label: 'Visa Ấn Độ', to: '/visa/an-do' },
        { label: 'Visa Úc', to: '/visa/uc' }
      ]
    },
    {
      label: 'Dự án',
      to: '/du-an',
      children: [
        { label: 'Khách hàng', to: '/khach-hang' }
      ]
    },
    { label: 'Nhân sự', to: '/nhan-su' },
    { label: 'Tuyển dụng', to: '/tuyen-dung' },
    { label: 'Blog', to: '/blog' }
  ])

  const languages = ref<Language[]>([
    { code: 'en', name: 'English', nameVi: 'Tiếng Anh', flag: '/flags/en.svg', translationUrl: '/dich-thuat-tieng-anh', interpretationUrl: '/phien-dich-tieng-anh' },
    { code: 'ja', name: 'Japanese', nameVi: 'Tiếng Nhật', flag: '/flags/ja.svg', translationUrl: '/dich-thuat-tieng-nhat', interpretationUrl: '/phien-dich-tieng-nhat' },
    { code: 'ko', name: 'Korean', nameVi: 'Tiếng Hàn', flag: '/flags/ko.svg', translationUrl: '/dich-thuat-tieng-han', interpretationUrl: '/phien-dich-tieng-han' },
    { code: 'zh', name: 'Chinese', nameVi: 'Tiếng Trung', flag: '/flags/zh.svg', translationUrl: '/dich-thuat-tieng-trung', interpretationUrl: '/phien-dich-tieng-trung' },
    { code: 'ru', name: 'Russian', nameVi: 'Tiếng Nga', flag: '/flags/ru.svg', translationUrl: '/dich-thuat-tieng-nga' },
    { code: 'fr', name: 'French', nameVi: 'Tiếng Pháp', flag: '/flags/fr.svg', translationUrl: '/dich-thuat-tieng-phap' },
    { code: 'de', name: 'German', nameVi: 'Tiếng Đức', flag: '/flags/de.svg', translationUrl: '/dich-thuat-tieng-duc' },
    { code: 'es', name: 'Spanish', nameVi: 'Tiếng Tây Ban Nha', flag: '/flags/es.svg', translationUrl: '/dich-thuat-tieng-tay-ban-nha' },
    { code: 'th', name: 'Thai', nameVi: 'Tiếng Thái', flag: '/flags/th.svg', translationUrl: '/dich-thuat-tieng-thai' },
    { code: 'id', name: 'Indonesian', nameVi: 'Tiếng Indonesia', flag: '/flags/id.svg', translationUrl: '/dich-thuat-tieng-indonesia' },
    { code: 'pt', name: 'Portuguese', nameVi: 'Tiếng Bồ Đào Nha', flag: '/flags/pt.svg', translationUrl: '/dich-thuat-tieng-bo-dao-nha' },
    { code: 'hi', name: 'Hindi', nameVi: 'Tiếng Hindi', flag: '/flags/hi.svg', translationUrl: '/dich-thuat-tieng-hindi' }
  ])

  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchSettings() {
    loading.value = true
    error.value = null
    try {
      // TODO: Replace with actual API call
    } catch (e) {
      error.value = 'Failed to fetch settings'
    } finally {
      loading.value = false
    }
  }

  async function updateSettings(data: Partial<SiteSettings>) {
    loading.value = true
    error.value = null
    try {
      settings.value = { ...settings.value, ...data }
    } catch (e) {
      error.value = 'Failed to update settings'
    } finally {
      loading.value = false
    }
  }

  return {
    settings,
    mainNavigation,
    languages,
    loading,
    error,
    fetchSettings,
    updateSettings
  }
})
