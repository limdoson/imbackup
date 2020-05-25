// 聊天类型: 1.好友聊天, 3.群聊
export const SESSION_TYPE_FRIEND = 1
export const SESSION_TYPE_TEAM = 3

// 群身份: 3.群主, 2.管理员, 1.普通群成员
export const TEAM_IDENTIFY_OWNER = 3
export const TEAM_IDENTIFY_MANAGER = 2
export const TEAM_IDENTIFY_NORMAL = 1

// 消息状态: 3.消息已撤回
export const MESSAGE_STATUS_RECALLED = 3
export const MESSAGE_STATUS_FRIEND_RECALLED = 4

// 添加好友验证方式 1.验证添加; 2.回答问题添加
export const ADD_TYPE_AGREE = 1
export const ADD_TYPE_ANSWER = 2

// 搜索分类 1.搜好友; 2.搜群聊
export const SEARCH_TYPE_USER = 1
export const SEARCH_TYPE_TEAM = 2


// 好友申请
export const FRIEND_APPLY_INVITED = 2   // 申请添加
export const FRIEND_APPLY_AGREED = 3    // 同意申请
export const FRIEND_APPLY_REJECTED = 4  // 拒绝申请

// 事件
export const EVENT_RECEIVED_FRIEND_MESSAGE = 9001 // 收到好友消息
export const EVENT_RECEIVED_TEAM_MESSAGE = 9002   // 收到群聊消息
export const EVENT_CREATED_TEAM = 2001            //
export const EVENT_DELETED_FRIEND_PASSIVED = 1002 // 被删除好友关系
export const EVENT_ADDED_FRIEND_PASSIVED = 1001   // 被添加好友: vt=1 直接添加成功; vt=2 邀请添加好友
