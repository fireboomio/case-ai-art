import {AuthenticationHookRequest, AuthenticationResponse} from "fireboom-wundersdk/server";
import {Client} from "../generated/fireboom.client";
import {User} from "generated/interface";

export default async function mutatingPostAuthentication(hook: AuthenticationHookRequest): Promise<AuthenticationResponse<User>> {
	if (hook.user.providerId === 'authing') {

		const client = new Client({})
		const {avatarUrl, provider, providerId, userId} = hook.user
		const {email, name, nickName} = hook.user.idToken as any
		const resp = await client.query.GetManyAdminUser({})

		if (resp.status === 'ok') {
			if (!resp.body.errors) {
				const existedUser = resp.body.data!.data
				if (existedUser.find(user => user.providerUserId !== userId)) {
					// TODO: 在此处添加代码
					return {
						status: 'deny',
						message: 'string'
					}
				}
				const _name = nickName || name || email || ''
				const rest = await client.mutation.CreateOneAdminUser({
					input: {
						name: _name,
						provider: provider!,
						providerId: providerId!,
						providerUserId: userId!,
						avatarUrl: avatarUrl
					}
				})
				if (rest.status === 'ok') {
					if (!rest.body.errors) {
						console.info(`Success sync user: ${providerId} - ${_name}`)
					}
				}
			}
		}

	}

	return {
		status: 'ok',
		user: hook.user
	}
}
