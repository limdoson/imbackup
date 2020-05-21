import { GRPC_HOSTNAME, rpcLog } from '@/rpc/config'
import {
  GetMemberListRequest, UpdateTeamRequest, PullSpecifiedRequest, AddMemberRequest, CreateTeamRequest, UpdateTeamNickRequest,
    SetManagerRequest, ChangeOwnerRequest, TeamChangeOwnerLeaveType, TeamMemberMuteRequest, KickMemberRequest, LeaveTeamRequest,
    TeamAddFriendRequest, UpdateAnnouncementRequest
} from '@/rpc/common/common_pb'
import { AcceptTeamInviteRequest, RejectTeamInviteRequest } from '@/rpc/im/message_pb'
import { TeamActClient } from '@/rpc/im/im_grpc_web_pb'

let teamActClient = new TeamActClient(GRPC_HOSTNAME, null, null)

export function CreateTeam(metadata, name, accids) {
	let req = new CreateTeamRequest()
	req.setTname(name)
	req.setMembersList(accids)
	
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

export function GetMemberList(metadata, {accid, tid, page}){
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

export function ChangeOwner(metadata, tid, openId) {
    let request = new ChangeOwnerRequest()
    request.setTid(tid)
    request.setMembersList([openId])
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

export function Dissolve(metadata, tid) {
    let req = new LeaveTeamRequest()
    req.setTid(tid)

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
    console.log(announcement)
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

export function AcceptInvite(metadata, applyId) {
    let req = new AcceptTeamInviteRequest()
    req.setApplyId(applyId)

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

export function RejectInvite(metadata, applyId) {
    let req = new RejectTeamInviteRequest()
    req.setApplyId(applyId)

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

/*// GetTeamApplyList
export function GetTeamApplyList(metadata, tid) {
    let req = new GetTeamRequest()
    req.setTid(tid)

    return new Promise((resolve, reject) => {
        teamActClient.getTeamApplyList(req, metadata, (err, response) => {
            rpcLog('Dissolve', req, err, response)
            if (err) {
                reject(err)
            } else {
                resolve(response.toObject())
            }
        })
    })
}*/

/*

// 根据 teamId 获取群设置信息
export function GetTeamSetting(metadata, teamId) {
  let request = new GetTeamRequest()
  request.setTeamId(teamId)

  return new Promise((resolve, reject) => {
    teamActClient.getTeamItem(request, metadata, (err, response) => {
      rpcLog('getTeamItem', request, err, response)

      if (err) {
        reject(err)
      } else {
        resolve(response.toObject())
      }
    })
  })
}

// 创建群聊
export function CreateTeam(metadata, teamName, ownerId, accids) {
  let request = new CreateTeamInfo()
  request.setTeamName(teamName)
  request.setOwner(ownerId)
  request.setAccidsList(accids)

  return new Promise((resolve, reject) => {
    teamActClient.createTeam(request, metadata, (err, response) => {
      rpcLog('createTeam', request, err, response)

      if (err) {
        reject(err)
      } else {
        resolve(response.toObject())
      }
    })
  })
}

// 拉取好友入群
export function RemoveTeamMembers(metadata, teamId, openId) {
  let request = new TeamMemberActInfo()
  request.setTeamId(teamId)
  request.setAccids([openId])

  return new Promise((resolve, reject) => {
    teamActClient.removeTeamMembers(request, metadata, (err, response) => {
      rpcLog('removeTeamMembers', request, err, response)

      if (err) {
        reject(err)
      } else {
        resolve(response.toObject())
      }
    })
  })
}

// 修改群名字
export function UpdateTeamName(metadata, teamId, newName) {
  let request = new UpdateTeamInfo()
  request.setTeamId(teamId)
  request.setName(newName)

  return new Promise((resolve, reject) => {
    teamActClient.updateTeam(request, metadata, (err, response) => {
      rpcLog('updateTeam', request, err, response)

      if (err) {
        reject(err)
      } else {
        resolve(response.toObject())
      }
    })
  })
}

// 修改群介绍
export function UpdateTeamIntro(metadata, teamId, newIntro) {
  let request = new UpdateTeamInfo()
  request.setTeamId(teamId)
  request.setIntro(newIntro)

  return new Promise((resolve, reject) => {
    teamActClient.updateTeam(request, metadata, (err, response) => {
      rpcLog('updateTeam', request, err, response)

      if (err) {
        reject(err)
      } else {
        resolve(response.toObject())
      }
    })
  })
}

// 解散群聊
export function DissolveTeam(metadata, teamId) {
  let request = new QuitTeam()
  request.setTeamId(teamId)

  return new Promise((resolve, reject) => {
    teamActClient.dissolveTeam(request, metadata, (err, response) => {
      rpcLog('dissolveTeam', request, err, response)

      if (err) {
        reject(err)
      } else {
        resolve(response.toObject())
      }
    })
  })
}

// 群禁言和移除禁言
export function MarkBanded(metadata, teamId, openId, value) {
  let request = new GetTeamRequest()
  request.setTeamId(teamId)
  request.setTo(openId)
  request.setValue(value)

  return new Promise((resolve, reject) => {
    teamActClient.markBanded(request, metadata, (err, response) => {
      rpcLog('markBanded', request, err, response)

      if (err) {
        reject(err)
      } else {
        resolve(response.toObject())
      }
    })
  })
}


*/
