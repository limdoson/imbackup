import { rpcLog } from '@itf/config'
import {
    GetMemberListRequest, UpdateTeamRequest, PullSpecifiedRequest, AddMemberRequest, CreateTeamRequest, UpdateTeamNickRequest,
    SetManagerRequest, ChangeOwnerRequest, TeamChangeOwnerLeaveType, TeamMemberMuteRequest, KickMemberRequest, LeaveTeamRequest,
    TeamAddFriendRequest, UpdateAnnouncementRequest
} from '@itf/common/common_pb'
import { 
    AcceptTeamInviteRequest, 
    RejectTeamInviteRequest,
    CreateAnnouncementRequest,
    PullAnnouncementListRequest,
    DeleteAnnouncementRequest } from '@itf/im/message_pb'
import { TeamActClient } from '@itf/im/im_grpc_web_pb'
import { request } from '@u/request'


let teamActClient = new TeamActClient(process.env.VUE_APP_GRPC_HOSTNAME, null, null)

export function CreateTeam(metadata, name, accids, magree =1) {
    let req = new CreateTeamRequest()
    req.setOwner(metadata.accid)
	req.setTname(name)
    req.setMembersList(accids)
    req.setMagree(magree)
	
	return new Promise((resolve, reject) => {
        teamActClient.createTeam(req, metadata, (err, response) => {
            rpcLog('createTeam', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

//获取群成员列表
export function GetMemberList(metadata, accid, tid, page){
    let req = new GetMemberListRequest()
    req.setAccid(accid)
    req.setTid(tid)
    req.setPage(page)

    return new Promise((resolve, reject) => {
        teamActClient.getMemberList(req, metadata, (err, response) => {
            rpcLog('getMemberList', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export function TeamUpdate(metadata, teamInfo) {
    let req = new UpdateTeamRequest()
    req.setBase(teamInfo)

    return new Promise((resolve, reject) => {
      teamActClient.update(req, metadata, (err, response) => {
          rpcLog('Team Update', req, err, response)
          if (err) {
              reject(err)
          } else {
              resolve(response.toObject())
          }
      })
    })
}

export function GetFriendsForTeam(metadata, teamId) {
    let request = new PullSpecifiedRequest()
    request.setTid(teamId)

    return new Promise((resolve, reject) => {
        teamActClient.friendValidateList(request, metadata, (err, response) => {
            rpcLog('FriendValidateList', request, err, response)

            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

// 拉取好友入群
export function AddTeamMembers(metadata, teamId, accids) {
    let request = new AddMemberRequest()
    request.setTid(teamId)
    request.setMembersList(accids)
    request.setMsg("test")

    return new Promise((resolve, reject) => {
        teamActClient.addMembers(request, metadata, (err, response) => {
            rpcLog('AddMembers', request, err, response)

            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}



// 设置群昵称
export function UpdateNickInTeam(metadata, teamId, openId, teamNick) {
    let request = new UpdateTeamNickRequest()
    request.setTid(teamId)
    //request.setAccid(openId)
    request.setTo(openId)
    request.setNick(teamNick)

    return new Promise((resolve, reject) => {
        teamActClient.updateTeamNick(request, metadata, (err, response) => {
            rpcLog('UpdateTeamNick', request, err, response)

            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export function RemoveMembers(metadata, tid, openId) {
    let req = new KickMemberRequest()
    req.setTid(tid)
    req.setMembersList([openId])
    return new Promise((resolve, reject) => {
        teamActClient.removeMembers(req, metadata, (err, response) => {
            rpcLog('RemoveMembers', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export function MuteMembers(metadata, tid, openId, mute) {
    let req = new TeamMemberMuteRequest()
    req.setTid(tid)
    req.setMembersList([openId])
    req.setMute(mute)

    return new Promise((resolve, reject) => {
        teamActClient.muteMembers(req, metadata, (err, response) => {
            rpcLog('MuteMembers', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export function RemoveManager(metadata, tid, openId) {
    let request = new SetManagerRequest()
    request.setTid(tid)
    request.setMembersList([openId])
    return new Promise((resolve, reject) => {
        teamActClient.removeManager(request, metadata, (err, response) => {
            rpcLog('RemoveManager', request, err, response)

            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export function AddManager(metadata, tid, openId) {
    let req = new SetManagerRequest()
    req.setTid(tid)
    req.setMembersList([openId])

    return new Promise((resolve, reject) => {
        teamActClient.addManager(req, metadata, (err, response) => {
            rpcLog('AddManager', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}


export function ChangeOwner(metadata, tid) {
    let request = new ChangeOwnerRequest()
    request.setTid(tid)
    request.setAccid()
    request.setLeave(TeamChangeOwnerLeaveType.CHANGEANDBEMEMBER)

    return new Promise((resolve, reject) => {
        teamActClient.addManager(request, metadata, (err, response) => {
            rpcLog('ChangeOwner', request, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}
//解散群
export function Dissolve(metadata, tid) {
    let req = new LeaveTeamRequest()
    req.setTid(tid)
    req.setAccid(metadata.accid)
    return new Promise((resolve, reject) => {
        teamActClient.dissolve(req, metadata, (err, response) => {
            rpcLog('Dissolve', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export function AddFriend(metadata, tid, openId, msg) {
    let req = new TeamAddFriendRequest()
    req.setTid(tid)
    req.setTo(openId)
    req.setMsg(msg)

    return new Promise((resolve, reject) => {
        teamActClient.addFriend(req, metadata, (err, response) => {
            rpcLog('team addFriend', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export function UpdateTeamAnnouncement(metadata, tid, announcement) {
    let req = new UpdateAnnouncementRequest()
    req.setTid(tid)
    req.setAnnouncement(announcement)

    return new Promise((resolve, reject) => {
        teamActClient.updateAnnouncement(req, metadata, (err, response) => {
            rpcLog('UpdateAnnouncement', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

export function AcceptInvite(metadata, notice) {
    let req = new AcceptTeamInviteRequest()
    // req.setAccid(metadata.accid)
    req.setApplyId(notice.applyId)

    return new Promise((resolve, reject) => {
        teamActClient.acceptInvite(req, metadata, (err, response) => {
            rpcLog('AcceptInvite', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}
//拒绝群邀请
export function RejectInvite(metadata, notice) {
    let req = new RejectTeamInviteRequest()
    // req.setAccid(metadata.accid)
    req.setApplyId(notice.applyId)

    return new Promise((resolve, reject) => {
        teamActClient.rejectInvite(req, metadata, (err, response) => {
            rpcLog('AcceptInvite', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

//主动退出
export function LeaveTeam (metadata, tid) {
    let req = new LeaveTeamRequest();
    req.setTid(tid);
    req.setAccid(metadata.accid)
    return new Promise((resolve, reject) => {
        teamActClient.leave(req, metadata, (err, response) => {
            rpcLog('LeaveTeam', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}


//修改群昵称 ： 可以是群主修改别人，也可以是自己修改自己
export function updateTeamNick (metadata, from , to, nick, tid) {
    let req = new UpdateTeamNickRequest()
    req.setTid(tid)
    req.setFrom(from)
    req.setTo(to)
    req.setNick(nick)

    return new Promise( (resolve, reject) => {
        teamActClient.updateTeamNick( req, metadata, (err, response) => {
            rpcLog('updateTeamNick', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

//创建群公告
export function createAnnouncement (metadata, title, content, tid) {
    let req = new CreateAnnouncementRequest()
    req.setTitle(title)
    req.setContent(content)
    req.setTid(tid)

    return new Promise( (resolve, reject) =>{
        teamActClient.createAnnouncement( req, metadata, (err, response) => {
            rpcLog('createAnnouncement', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

//拉取群公告
export function pullAnnouncementList (metadata, tid, page) {
    let req = new PullAnnouncementListRequest()
    req.setTid(tid)
    req.setPage(page)

    return new Promise( (resolve, reject) =>{
        teamActClient.pullAnnouncementList( req, metadata, (err, response) => {
            rpcLog('pullAnnouncementList', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}

//删除群公告
export function deleteAnnouncement (metadata, args) {
    return request({
        request : new DeleteAnnouncementRequest(),
        server : teamActClient,
        method : 'deleteAnnouncement',
    },  metadata, args)
}