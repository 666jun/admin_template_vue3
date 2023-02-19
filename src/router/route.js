import { Home as HomeIcon, EllipsisHorizontalCircleSharp, Apps } from '@vicons/ionicons5';
import { markRaw } from 'vue';

const Home = () => import('../views/home/Home.vue');
const About = () => import('../views/about/About.vue');
const Comp = () => import('../views/comp/Comp.vue');
const Table = () => import('../views/comp/table/Table.vue');
const Icons = () => import('../views/comp/Icons/Icons.vue');
const AnimationIcons = () => import('../views/comp/AnimationIcons/AnimationIcons.vue');

export const children = [
	{
		path: '/home',
		name: '首页',
		meta: {
			compName: 'Home',
			// fix warn : Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.
			icon: markRaw(HomeIcon),
		},
		component: Home,
	},
	{
		path: '/comp',
		redirect: '/comp/table',
		name: '组件',
		meta: {
			compName: 'Comp',
			icon: markRaw(Apps),
			val:'福福福福'
		},
		component: Comp,
		children: [
			{
				path: '/comp/table',
				name: '表格',
				meta: {
					compName: 'Table',
				},
				component: Table,
			},
			{
				path: '/comp/icons',
				name: '图标',
				meta: {
					compName: 'Icons',
				},
				component: Icons,
			},
			{
				path: '/comp/animationIcons',
				name: 'lottie动画图标',
				meta: {
					compName: 'AnimationIcons',
				},
				component: AnimationIcons,
			},
		],
	},
	{
		path: '/about',
		name: '关于',
		meta: {
			compName: 'About',
			icon: markRaw(EllipsisHorizontalCircleSharp),
		},
		component: About,
	},
];
