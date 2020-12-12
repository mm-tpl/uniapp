declare interface IUserInfo {
	id: string;
	userid: string;			// 手机号
	info: {
		name: string;		// 姓名
		department: string;	// 所属机构id
		total: number;		// 学习总时长
	};
	sessionid: string;
}

declare interface VueEvent<T> {
	detail: {
		value: T;
	};
}

/**
 * 资讯中心分类
 */
declare interface ITable001 {
	fld001: string;	// id
	fld002: string;	// 分类名称
	fld003: number;	// 分类排序编号
}

/**
 * 课程分类
 */
declare interface ITable002 {
	fld001: string;	// id
	fld002: string;	// 分类名称
}

/**
 * 讲师
 */
declare interface ITable003 {
	fld001: string; // id
	fld002: string; // 讲师姓名
	fld003?: string; // 讲师简介
	fld004?: string; // 讲师照片
}

/**
 * 课程
 */
declare interface ITable004 {
	fld001: string; // id
	fld002: string; // 课程分类id
	fld003: string; // 课程简介
	fld004?: number; // 课程排序编号，可以按优先级，热门度等
	fld005?: string; // 课程封面文件id
}

/**
 * 课程详情
 */
declare interface ITable005 {
	fld001: string;		// id
	fld002: string;		// 课程id,tb004.fld001
	fld003?: number;	// 课程排序编号
	fld004?: string;	// 课程封面文件id
	fld005?: string;	// 讲师id
	fld006?: string;	// 课程视频文件id
	fld007?: string;	// 当节课程说明
	fld008?: number;	// 视频时长
	fld009?: number;	// 当前播放位置
}

/**
 * 期次
 */
declare interface ITable006 {
	fld001: string; // id
	fld002: string; // 期次名称
	fld003: string; // 课程id,tb004.fld001
	fld004: number; // 开始时间
	fld005: number; // 结束时间
}

/**
 * 学生报名期次
 */
declare interface ITable007 {
	fld001: string; // id
	fld002: string; // 学生id,users.id
	fld003: string; // 期次id,tb006.fld001
	fld004: string; // 课程id,tb004.fld001
	fld005: string; // 当前课程已完成学习课程详情,tb008.fld001
	fld006: number; // 当前课程已学习总时长
}

/**
 * 学生在线学习情况
 */
declare interface ITable008 {
	fld001: string; // id
	fld002: string; // 学生报名期次id,tb007.fld001
	fld003: string; // 课程详情id,tb005.fld001
	fld004?: string; // 签到照片文件id
	fld005?: number; // 签到时间
	fld006?: string; // 签退照片文件id
	fld007?: number; // 签退时间
}

/**
 * 学生在线学习照片采集
 */
declare interface ITable009 {
	fld001: string; // id
	fld002: string; // 学生在线学习情况id,tb008.fld001
	fld003?: string; // 照片文件id
	fld004?: number; // 拍照时间
}

/**
 * 资讯
 */
declare interface ITable010 {
	fld001: string; // id
	fld002: string; // 资讯分类编号,tb001.fld001
	fld003?: string; // 标题
	fld004?: string; // 内容
	fld005: number;	// 发布时间
}

/**
 * 机构类型
 */
declare interface ITable011 {
	fld001: bigint; // 类型,1培训学校，2课程提供方
	fld002: string; // 类型名称，培训学校或课程提供方
}

/**
 * 机构
 */
declare interface ITable012 {
	fld001: string; // id
	fld002: bigint; // 机构类型，tb011.fld001
	fld003?: string; // 机构名称
}
