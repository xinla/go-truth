import config from '@/lib/config/config'
import commonUtil from '@/service/util/commonUtil'
const controller =config.successServer+'/zjzx-article/transmit';
const service ={}

service.getTransmitList = function(articleid,page,size) {
	
	var params = {
		articleid,//:"文章id",
		page,//:"当前页"
		size,//:"分页大小
	};

	var resMap = commonUtil.ajaxAsync(controller+'/getTransmitList',params);

	return resMap;
}

export default service

