import { createRouter, createWebHistory } from 'vue-router';
import CourseCatalog from '@/views/CourseCatalog.vue';
import CourseDetail from '@/views/CourseDetail.vue';
import MyCourses from '@/views/MyCourses.vue';
import MainPage from '@/views/MainPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
    },
    {
      path: '/courses',
      name: 'Courses',
      component: CourseCatalog,
    },
    {
      path: '/course/:id',
      name: 'CourseView',
      component: CourseDetail,
    },
    {
      path: '/mycourses',
      name: 'MyCoursesView',
      component: MyCourses,
    },
  ],
});

export default router;
