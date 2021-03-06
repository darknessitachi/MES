/**
 * 
 */

$(document).ready(function(){	
	
	var mainPanel = $('#mainwin');
	
    $('#t_base').tree({
	       data: [{
	                id:'fc_equipment',
				    text: '设备信息管理'
			       },{
				    id: 'fc_material',
	                text: '物料信息管理'
			       },{
	                id: 'fc_product',
	                text: '产品信息管理'
	               },{
	                id: 'fc_pipetype',
	                text: '钢管信息管理'
	               }],
	              onClick:function(node){
	          		//如果功能界面没加载过，创建新功能界面并显示，如果已加载过，直接调用已加载的界面
	          		if(mainPanel.tabs("getTab",node.text)!=null)
	          			mainPanel.tabs("select",node.text);
	          		else
	          			initfuncUI(mainPanel,node.id);
	          	 }
     });
    
     $('#t_orderplan').tree({
	       data: [{
                    id:'fc_order',
			        text: '用户订单管理'
		          },{
			        id: 'fc_plan',
                    text: '生产计划管理'
		         }],
	              onClick:function(node){
	            	//如果功能界面没加载过，创建新功能界面并显示，如果已加载过，直接调用已加载的界面
		          		if(mainPanel.tabs("getTab",node.text)!=null)
		          			mainPanel.tabs("select",node.text);
		          		else
		          			initfuncUI(mainPanel,node.id);
	          	 }
	             
     });
     $('#t_process').tree({
	       data: [{
                     id:'fc_procedure',
			         text: '工序信息管理'
		          },{
			         id: 'fc_process',
                     text: '工艺信息管理'
		          },{
                     id: 'fc_checkpro',
                     text: '工艺信息审批'
                  }],
                  onClick:function(node){
  	          		//如果功能界面没加载过，创建新功能界面并显示，如果已加载过，直接调用已加载的界面
  	          		if(mainPanel.tabs("getTab",node.text)!=null)
  	          			mainPanel.tabs("select",node.text);
  	          		else
  	          			initfuncUI(mainPanel,node.id);
              	 }     
     });
     $('#t_product').tree({
	       data: [{
                     id:'fc_task',
			         text: '生产任务管理'
		          },{
			         id: 'fc_taskchenge',
                     text: '生产任务变更'
		          },{
                     id: 'fc_taskgo',
                     text: '生产任务执行'
                  },{
                     id: 'fc_taskquery',
                     text: '生产任务跟踪'
                  }],
                  onClick:function(node){
                	//如果功能界面没加载过，创建新功能界面并显示，如果已加载过，直接调用已加载的界面
  	          		if(mainPanel.tabs("getTab",node.text)!=null)
  	          			mainPanel.tabs("select",node.text);
  	          		else
  	          			initfuncUI(mainPanel,node.id);
              	 }	        
      });
     $('#t_system').tree({
	       data: [{
                      id:'fc_user',
			          text: '用户管理'
		         },{
			          id: 'fc_role',
                      text: '角色管理'
		         },{
                      id: 'fc_department',
                      text: '部门管理'
                 },{
                      id: 'fc_log',
                      text: '日志管理'
                 }],
                 onClick:function(node){
                	//如果功能界面没加载过，创建新功能界面并显示，如果已加载过，直接调用已加载的界面
 	          		if(mainPanel.tabs("getTab",node.text)!=null)
 	          			mainPanel.tabs("select",node.text);
 	          		else
 	          			initfuncUI(mainPanel,node.id);
             	 }
    });

	//根据不同的功能节点标识初始化不同的功能界面
	function initfuncUI(funcWin,funcNodeId)
	{
		if(funcNodeId == 'fc_user')
			inituser(funcWin);
		if(funcNodeId == 'fc_role')
			initrole(funcWin);
		if(funcNodeId == 'fc_log')
			initlog(funcWin);
		if(funcNodeId == 'fc_equipment')
			initequipment(funcWin);
		if(funcNodeId == 'fc_material')
			initmaterial(funcWin);
		if(funcNodeId == 'fc_pipetype')
			initpipetype(funcWin);
		if(funcNodeId == 'fc_product')
			initproduct(funcWin);
		if(funcNodeId == 'fc_procedure')
			initprocedure(funcWin);		
	}
})