这个作品未完全成型，这个练手作品需要打包上线，部署线上环境，
虚拟主机无法达到node需求。
暂时不打算深入php，
所以使用了mock数据，作为展示吧
这个作品主要是展示了自己对react的一些生态的运用。并不是很棒。

```json
{
  "test" : "test"
}
大标题
====
这个是
中标题
-------
这个是

# **绑定 - 接口**
> **URL:** [BaseUrl/binding](BaseUrl/binding)
>
> 无参数

| 属性名称     | 类型       | 描述                                                          |  可否动态数据  |     静态值           |
| --------    | -----:     | -----:                                                       | :----:        |     :----:          |
| text        | string     | 绑定 - 筛选器展示文字( 建筑物名称 / 楼层名称 / 房间名称 )        |   true        |                     |
| value       | number     | 绑定 - 该对象唯一值( 用于检查是否可用 )                         |   true        |                     |
| floorArr    | array      | 绑定 - 楼层数组( 建筑物内 )                                    |   true        |                      |
| floorNum    | number     | 绑定 - 楼层值                                                 |   true        |                      |
| roomArr     | array      | 绑定 - 房间数组( 楼层内 )                                      |   true        |                      |
| roomNum     | number     | 绑定 - 房间值                                                 |   true        |                      |

