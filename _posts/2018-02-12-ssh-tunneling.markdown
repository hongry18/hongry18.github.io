# SSH Tunneling

* -L Option: Local Port Forwarding
* -R Option: Remote Port Forwarding
* -N: Do not execute a remote command

## command
### create single tunnel
```shell
ssh -N -LPort:host:Port2 user@host
ssh -N -RPort:host:Port2 user@host
```

### create multiple tunnel
```shell
[user@local] ssh -L30001:localhost:30001 user@host1
[user@host1] ssh -L30001:localhost:30001 user@host2
[user@host2] ssh -L30001:localhost:22 user@host3

# single command
ssh -v -L30001:localhost:22 user@host1 -t ssh -v -L30001:localhost:22 user@host2 -t ssh -v -L30001:localhost:22 user@host1
```
