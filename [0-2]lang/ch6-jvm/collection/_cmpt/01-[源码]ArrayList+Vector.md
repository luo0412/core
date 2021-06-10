# [源码]ArrayList+Vector

- 遍历的时候可以删除吗?

# ArrayList的源码实现

- 实现接口
    - List
    - RandomAccess
    - Cloneable
    - java.io.Serializable

```java
// 源码路径 jdk1.8.0_152\jre\lib\rt.jar!\java\util\ArrayList.class
```

- 两种copy

    - System.arraycopy()
    - Arrays.copyOf()

```java
// arraycopy()
需要目标数组，
将原数组拷贝到你自己定义的数组里，
而且可以选择拷贝的起点和长度以及放入新数组中的位置

System.arraycopy(elementData, index, elementData, index + 1, size - index);

// copyOf()
系统自动在内部新建一个数组，并返回该数组

Arrays.copyOf(elementData, size)
```

- 迭代器
    - Itr
    - ListItr
    - Iterator
    - ListIterator


# ArrayList-扩容

```java
private void grow(int minCapacity) {
    // oldCapacity为旧容量，newCapacity为新容量
    int oldCapacity = elementData.length;
    //将oldCapacity 右移一位，其效果相当于oldCapacity /2，
    //我们知道位运算的速度远远快于整除运算，整句运算式的结果就是将新容量更新为旧容量的1.5倍，
    int newCapacity = oldCapacity + (oldCapacity >> 1);
    //然后检查新容量是否大于最小需要容量，若还是小于最小需要容量，那么就把最小需要容量当作数组的新容量，
    if (newCapacity - minCapacity < 0)
        newCapacity = minCapacity;
    //再检查新容量是否超出了ArrayList所定义的最大容量，
    //若超出了，则调用hugeCapacity()来比较minCapacity和 MAX_ARRAY_SIZE，
    //如果minCapacity大于MAX_ARRAY_SIZE，则新容量则为Interger.MAX_VALUE，否则，新容量大小则为 MAX_ARRAY_SIZE。
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        newCapacity = hugeCapacity(minCapacity);
    // minCapacity is usually close to size, so this is a win:
    elementData = Arrays.copyOf(elementData, newCapacity);
}
```

---

# Vector