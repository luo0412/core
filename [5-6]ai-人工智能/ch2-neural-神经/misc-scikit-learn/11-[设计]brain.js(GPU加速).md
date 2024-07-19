# [设计]brain.js(GPU加速)

- https://github.com/BrainJS/brain.js

# 代码示例

```js
//定义训练样本
const trainingData = [......];
//定义神经网络配置
const netConfig = {
    hiddenLayers:[3],       //声明隐藏层规模，示例中使用了1个隐藏层，神经元个数为3
    activation:'sigmoid'    //选择激活函数
    //...其他配置项
}
//定义训练过程配置
const trainingConfig = {
    iterations: 20000,     //定义反复训练的次数
    log: true,             //是否在训练过程中打印日志
    logPeriod:10,          //每循环10次打印1次日志
    learningRate:0.3,      //学习率，会影响神经网络的训练速度和偏差精度
    //...其他配置项
}
//定义测试数据
const testData = [......]
//实例化反向传播神经网络
const net = new brain.NeuralNetwork(netConfig)
//训练神经网络
net.train(trainingData, trainingConfig);
//测试神经网络
const output = net.run(testData);
```

---

# 参考 @ref