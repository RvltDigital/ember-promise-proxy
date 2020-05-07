

export default function (array)
{
    array.sort((i1, i2) => i1.created.getTime() > i2.created.getTime()? -1: i1.created.getTime() < i2.created.getTime()? 1: 0);
}
