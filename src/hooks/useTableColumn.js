import { h } from 'vue';
import { NTag, NButton, NProgress } from 'naive-ui';

export function useTableColumn() {
	function renderTag(row, key) {
		const tags = row[key].map(tag => {
			return h(
				NTag,
				{
					style: {
						marginRight: '6px',
					},
					type: 'info',
					bordered: false,
				},
				() => tag
			);
		});
		return tags;
	}

	function renderButton(row, callBack) {
		return h(
			NButton,
			{
				size: 'small',
				onClick: () => callBack(row),
			},
			() => '资 讯'
		);
	}

	function renderProgress(row) {
		function status() {
			if (row.progress > 70) return 'success';
			if (row.progress > 30) return 'warning';
			return 'error';
		}

		return h(NProgress, {
			type: 'line',
			percentage: row.progress,
			indicatorPlacement: 'inside',
			processing: true,
			height: 12,
			status: status(),
		});
	}

	return { renderTag, renderButton, renderProgress };
}
