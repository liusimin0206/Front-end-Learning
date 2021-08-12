/*
 * @Author: liusimin
 * @Date: 2021-04-15 18:16:42
 * @LastEditors: your name
 * @LastEditTime: 2021-04-15 19:40:09
 * @Description: file content
 */
a =
{
    'query.type': {
        handler(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.$api.taskManage.getTaskType(newVal)
                    .then(res => {
                        if (res.code === 200) {
                            this.taskTypeList = res.data
                            this.taskTypeList.unshift({
                                id: 0,
                                value: '全部'
                            })
                            this.query.taskType = 0
                        } else {
                            this.$Message.error(res.msg)
                        }
                    })
                    .then(
                        () => {
                            this.searchTaskList()
                        }
                    )
            }
        },
        immediate: true
    }
}