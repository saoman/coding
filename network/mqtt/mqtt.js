/**
 * websocket 封装
 */

class MQTT {
	/**
	* 初始化
	* @param address
	*/
    init(address) {
        this.socket = io(address);
        this.socket.on('disconnect', function () {
            console.log('you have been disconnected');
        });
        this.socket.on('reconnect', function () {
            console.log('you have been reconnected');
            //			if(username) {
            //				socket.emit('add user', username);
            //			}
        });
        this.socket.on('reconnect_error', function () {
            console.log('attempt to reconnect has failed');
        });

        console.log("websocket init");
        
        
        // Create a client instance
		var client = new Paho.MQTT.Client("test.ws.onemore.cc", Number(80), "clientId");
		
		// set callback handlers
		client.onConnectionLost = this.onConnectionLost;
		client.onMessageArrived = this.onMessageArrived;
		
		// connect the client
		client.connect({onSuccess:this.onConnect});
    }
	// called when the client connects
	function onConnect() {
	  // Once a connection has been made, make a subscription and send a message.
	  console.log("onConnect");
	  client.subscribe("onemore/square/notice/kindergarten");
	  message = new Paho.MQTT.Message("Hello");
	  message.destinationName = "onemore/square/notice/kindergarten";
	  client.send(message);
	}
	function onConnectionLost(){
		
	}
	
	function onMessageArrived(){
		
	}
	
	/**
	 * 发送消息
	 * @param eventname
	 * @param data
	 * @param callback
	 */
    sendMsg(eventname, data, cb) {
        this.socket.emit(eventname, data, cb);
    }

	/**
	 * 绑定事件监听
	 * @param type
	 * @param handler
	 */
    addListener(eventname, handler) {
        var that = this;
		/**
		 * 定义一个事件单元类
		 * @param eventname
		 * @constructor
		 */
        function EventMeta(eventname) {
            this.name = eventname;
            this.handlerMap = {};
            this.handlerList = [];
        }

        var EventHandlerMap = this.getEventHandlerMap();
        var meta = EventHandlerMap[eventname];
        if (!meta) {
            meta = EventHandlerMap[eventname] = new EventMeta(eventname);
            this.socket.on(eventname, function (data) {
                that.trigger(eventname, data);
            });
        }
        var handlerId = handler.__handlerId;
        if (!handlerId) {
            EventHandlerMap.__handlerId++;
            handler.__handlerId = EventHandlerMap.__handlerId;
            handlerId = handler.__handlerId;
        }
        //对于同一事件的同一处理函数，不重复绑定
        if (!meta.handlerMap[handlerId]) {
            meta.handlerMap[handlerId] = handler;
            meta.handlerList.push(handler);
        }
    }

	/**
	 * 移除事件监听
	 * @param type
	 * @param handdler
	 */
    removeListener(eventname, handdler) {
        var EventHandlerMap = this.getEventHandlerMap();
        var meta = EventHandlerMap[eventname];
        if (!meta) return;
        //移除一个handler的绑定
        if (handdler && handdler.__handlerId) {
            var index = meta.handlerList.indexOf(handdler);
            if (index > -1) {
                meta.handlerList.splice(index, 1);
                delete meta.handlerMap[handdler.__handlerId];
                return;
            }
        }
        //移除所有handler
        meta.handlerMap = {};
        meta.handlerList.length = 0;
    }

	/**
	 * 触发事件
	 * @param eventname
	 */
    trigger(eventname, data) {
        var EventHandlerMap = this.getEventHandlerMap();
        var that = this;
        var meta = EventHandlerMap[eventname];
        if (!meta) return;
        var onceHandlerList = [];
        //依次同步执行handler
        meta.handlerList.forEach(function (handler) {
            if (handler.__once) {
                onceHandlerList.push(handler)
            }
            handler.call(this, data);
        });
        //清除绑定为once的事件
        onceHandlerList.forEach(function (handler) {
            that.removeEventListener(eventname, handler);
        });
    }

    getEventHandlerMap() {
        var EventHandlerMap = this.__EventHandlerMap;
        if (EventHandlerMap) return EventHandlerMap;
        return this.__EventHandlerMap = {
            __handlerId: 0
        };
    }
}

export default new WS()
