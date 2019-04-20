# vue el-upload直传阿里云oss 总结
https://www.jianshu.com/p/e6721e64c93a

#防盗链
https://www.alibabacloud.com/help/zh/doc-detail/31937.htm?spm=a2c63.p38356.879954.10.6aca71006vymAd#h2-url-3
多种方式
1 Referfer 白名单。
2 Bucket签名 url
	https://www.cnblogs.com/MainActivity/p/8492211.html



#基于OSS的防盗链最佳实践点如下：
#使用三级域名URL，例如referer-test.oss-cn-hangzhou.aliyuncs.com/aliyun-logo.png，安全性比绑定二级域名更高。三级域名方式能够提供Bucket级别的清洗和隔离，能够应对被盗链后的流量暴涨的情况，也能避免不同Bucket间的互相影响，最终提高业务可用性。
如果使用自定义域名作为连接，CNAME也请绑定到三级域名，规则是bucket + endpoint。假如您的bucket名为test，三级域名则为test.oss-cn-hangzhou.aliyuncs.com。
#对Bucket设定尽可能严格的权限类别。例如提供公网服务的Bucket设置为public-read或private，禁止设置为public-read-write。Bucket权限参见访问控制。
#对访问来源进行验证，根据需要设置合适的Referer白名单。
#如果需要更严格的防盗链方案，请参考签名的URL方案。
#记录Bucket访问日志，能够及时发现盗链活动和验证防盗链方案的有效性。

