---
id: network-diagnostics
title: Network Diagnostics
sidebar_label: Network Diagnostics
---

In this section, we'll review some basic commands that will help you assess and diagnose network problems. 
If you suspect connectivity issues, adding the output from the relevant commands to your [support ticket](support) can help our staff diagnose your issue. This is particularly helpful in cases where networking issues are intermittent.

## TL;DR

First try ping to our hosts.
If you need support for network issues, The best way we can help is when you would send us the result ot the traceroute / mtr report as described below, which is helpful information about your local network connectivity. Basically these commands measure the time it takes to send internet packets from your device.

Please send us the results of the following commands

`"mtr -r bintu-stream.nanocosmos.de"`

and

`"mtr -r bintu-play.nanocosmos.de"`

*or*

`"ping bintu-stream.nanocosmos.de"`

and

`"ping bintu-play.nanocosmos.de"`

You can also directly connect to specific geo locations, see our [support document](support).

Adding `ping`, `mtr` or `traceroute` output to [support](support) tickets is sometimes useful when trying to diagnose network issues. You may also want to forward `traceroute` information to your Internet Service Provider (ISP) if you suspect that the connectivity issue is with your ISP's network. Recording `traceroute` information is particularly useful if you are experiencing an intermittent issue.

## IP Addresses

- What is your public IP address? 
  You can use http://whatismyip.akamai.com/ to find out, if you're unsure.

- Who is the ISP?

## The ping Command

The `ping` command tests the connection between the local machine and a remote address or machine. 
The ping program is installed by default on just about every operating system, Linux, MacOS, and Windows, so you do not need to install it.
It runs from the command line.

The following commands "ping" `google.com` :

```shell
ping google.com
```
    
Instead google.com you should use any of the nanocosmos host names like mentioned above.

These commands send a small amount of data (an ICMP packet) to the remote host and wait for a response. If the system is able to make a connection, it will report on the "round trip time" for every packet. <br/>
Here is the sample output of four pings to google.com:

```shell
PING google.com (216.58.217.110): 56 data bytes
64 bytes from 216.58.217.110: icmp_seq=0 ttl=54 time=14.8 ms
64 bytes from 216.58.217.110: icmp_seq=1 ttl=54 time=16.6 ms
64 bytes from 216.58.217.110: icmp_seq=2 ttl=54 time=16.5 ms
```
The `time` field specifies in milliseconds the duration of the round trip for an individual packet. You can use **Control+C** to interrupt the process. You'll be presented with some statistics once the process is stopped. This will resemble:

```shell
--- google.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3007ms
rtt min/avg/max/mdev = 33.890/40.175/53.280/7.679 ms
```

There are several important data points to notice:

-   *Packet Loss*, or the discrepancy between the number of packets sent and the number of packets that return successfully. This number shows the percentage of packets that are dropped.
-   *Round Trip Time* (rtt) statistics on the final line report information about all the ping responses. For this ping we see that the fastest packet round trip (min) took 16.5 milliseconds. The average round trip (avg) took 40.175 milliseconds. The longest packet (max) took 53.28 milliseconds. A single standard deviation unit (mdev) for these four packets is 7.67 milliseconds.

The ping command is useful as an informal diagnostic tool to measure point-to-point network latency, and as a tool to simply ensure you are able to make a connection to a remote server.

## The traceroute Command

The `traceroute` command expands on the functionality of the [ping](#the-ping-command) command. 
It is also part of every operating system, Linux, MacOS, and Windows (where it is called tracert).

It provides a report on the path that the packets take to get from the local machine to the remote machine. Each step (intermediate server) in the path is called a *hop*. This information is useful when troubleshooting a networking issue: if there is packet loss in one of the first few hops the problem is often related to the user's local area network (LAN) or Internet service provider (ISP). By contrast, if there is packet loss near the end of the route, the problem may be caused by an issue with the server's connection.

Here is an example of output from a `traceroute` command:

```shell
traceroute to google.com (74.125.53.100), 30 hops max, 40 byte packets
1 207.192.75.2 (207.192.75.2) 0.414 ms 0.428 ms 0.509 ms
2 vlan804.tbr2.mmu.nac.net (209.123.10.13) 0.287 ms 0.324 ms 0.397 ms
3 0.e1-1.tbr2.tl9.nac.net (209.123.10.78) 1.331 ms 1.402 ms 1.477 ms
4 209.85.250.144 (209.85.250.144) 86.025 ms 86.151 ms 86.136 ms
5 64.233.174.131 (64.233.174.131) 80.877 ms 216.239.48.34 (216.239.48.34) 76.212 ms 64.233.174.131 (64.233.174.131) 80.884 ms
6 216.239.48.32 (216.239.48.32) 81.267 ms 81.198 ms 81.186 ms
7 216.239.48.137 (216.239.48.137) 77.478 ms pw-in-f100.1e100.net (74.125.53.100) 79.009 ms 216.239.48.137 (216.239.48.137) 77.437 ms
```
Often the hostnames and IP addresses on either side of a failed jump are useful in determining who operates the machine where the routing error occurs. Failed jumps are designated by lines with three asterisks (`* * *`).


## The mtr Command

The `mtr` command, like the [traceroute](#the-traceroute-command) tool, provides information about the route that internet traffic takes between the local system and a remote host. However, `mtr` provides additional information about the round trip time for the packet. In a way, you can think of `mtr` as a combination of traceroute and ping. Usually mtr is not installed by default on all operating systems, so you might need to download and install it first.

Here is an example of output from an `mtr` command:
```shell
HOST: google.com                        Loss%   Snt     Last    Avg     Best    Wrst    StDev
    1.  256.129.75.4                    0.0%    10      0.4     0.4     0.3     0.6     0.1
    2.  vlan804.tbr2.mmu.nac.net        0.0%    10      0.3     0.4     0.3     0.7     0.1
    3.  209.85.251.9                    0.0%    10      23.1    35.9    22.6    95.2    27.6
    4.  72.14.239.127                   0.0%    10      24.2    24.8    23.7    26.1    1.0
    5.  209.85.255.190                  0.0%    10      27.0    27.3    23.9    37.9    4.2
    6.  gw-in-f100.1e100.net            0.0%    10      24.1    24.4    24.0    26.5    0.7
```
Like the `ping` command, `mtr` tracks the speed of the connection in real time until you exit the program with **CONTROL+C**. To have `mtr` stop automatically and generate a report after ten packets, use the `--report` flag:

```shell
mtr --report google.com
```

Be aware that `mtr` will pause for a few moments while generating output. 

For more information regarding `mtr` consider our [diagnosing network issues with mtr](./network-diagnostics-mtr) guide.

## The dig command

Our cloud service is based on worldwide geo-loadbalanced hosts.
To check the correct host resolution from DNS, you can use the "dig" command:
```shell
dig bintu-play.nanocosmos.de
```
Example result:
```shell
; <<>> DiG 9.10.6 <<>> bintu-play.nanocosmos.de
;; QUESTION SECTION:
;bintu-play.nanocosmos.de.	IN	A

;; ANSWER SECTION:
bintu-play.nanocosmos.de. 30	IN	CNAME	bintu-play.cdn.nanocosmos.de.
bintu-play.cdn.nanocosmos.de. 10 IN	CNAME	play.out-a.nanocosmos.de.
play.out-a.nanocosmos.de. 30	IN	CNAME	eu.out-a.nanocosmos.de.
eu.out-a.nanocosmos.de.	30	IN	CNAME	edge-eu-ams-vubm-t2a-01.out-a.nanocosmos.de.
edge-eu-ams-vubm-t2a-01.out-a.nanocosmos.de. 30	IN A 209.250.245.22

;; Query time: 12 msec
;; SERVER: 192.168.178.1#53(192.168.178.1)
```

## Sharing results

You may send your results via our [support form](https://www.nanocosmos.de/support) or paste it into a hosting service like https://paste.ubuntu.com or https://gist.github.com/
