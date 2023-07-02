# Проверка битов

## Задача

Требуется рассматривать числа как битовые маски, хотя в языке XSLT нет понятия целого числа а, значит, нет и поразрядных операций.

При работе с XML не пытайтесь во чтобы бы то ни стало закодировать информацию в виде набора битов. Применяйте это решение лишь тогда, когда не можете контролировать способ представления данных.

## Решение

Следующее решение работает для 16-разрядных чисел, но легко обобщается на 32-разрядные:

```xml
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="1.0"
    id="bittesting"
>
    <!-- степени двойки -->
    <xsl:variable name="bit15" select="32768" />
    <xsl:variable name="bit14" select="16384" />
    <xsl:variable name="bit13" select="8192" />
    <xsl:variable name="bit12" select="4096" />
    <xsl:variable name="bit11" select="2048" />
    <xsl:variable name="bit10" select="1024" />
    <xsl:variable name="bit9" select="512" />
    <xsl:variable name="bit8" select="256" />
    <xsl:variable name="bit7" select="128" />
    <xsl:variable name="bit6" select="64" />
    <xsl:variable name="bit5" select="32" />
    <xsl:variable name="bit4" select="16" />
    <xsl:variable name="bit3" select="8" />
    <xsl:variable name="bit2" select="4" />
    <xsl:variable name="bit1" select="2" />
    <xsl:variable name="bit0" select="1" />
    <xsl:template name="bitTest">
        <xsl:param name="num" />
        <xsl:param name="bit" select="$bit0" />
        <xsl:choose>
            <xsl:when
                test="( $num mod ( $bit * 2 ) ) -
( $num mod ( $bit
) )"
            >
                1
            </xsl:when>
            <xsl:otherwise>0</xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <xsl:template name="bitAnd">
        <xsl:param name="num1" />
        <xsl:param name="num2" />
        <xsl:param name="result" select="0" />
        <xsl:param name="test" select="$bit15" />
        <xsl:variable
            name="nextN1"
            select="($num1 >= $test) * ($num1 - $test) + not($num1 >= $test) * $num1"
        />
        <xsl:variable
            name="nextN2"
            select="($num2 >= $test) * ($num2 - $test) + not($num2 >= $test) * $num2"
        />
        <xsl:choose>
            <xsl:when test="$test &lt; 1">
                <xsl:value-of select="$result" />
            </xsl:when>
            <xsl:when
                test="$num1 >= $test and $num2 >= $test"
            >
                <xsl:call-template name="bitAnd">
                    <xsl:with-param
                        name="num1"
                        select="$nextN1"
                    />
                    <xsl:with-param
                        name="num2"
                        select="$nextN2"
                    />
                    <xsl:with-param
                        name="result"
                        select="$result + $test"
                    />
                    <xsl:with-param
                        name="test"
                        select="$test div 2"
                    />
                </xsl:call-template>
            </xsl:when>
            <xsl:otherwise>
                <xsl:call-template name="bitAnd">
                    <xsl:with-param
                        name="num1"
                        select="$nextN1"
                    />
                    <xsl:with-param
                        name="num2"
                        select="$nextN2"
                    />
                    <xsl:with-param
                        name="result"
                        select="$result"
                    />
                    <xsl:with-param
                        name="test"
                        select="$test div 2"
                    />
                </xsl:call-template>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <xsl:template name="bitOr">
        <xsl:param name="num1" />
        <xsl:param name="num2" />
        <xsl:param name="result" select="0" />
        <xsl:param name="test" select="$bit15" />
        <xsl:variable
            name="nextN1"
            select="($num1 >= $test) * ($num1 - $test) + not($num1 >= $test) * $num1"
        />
        <xsl:variable
            name="nextN2"
            select="($num2 >= $test) * ($num2 - $test) + not($num2 >= $test) * $num2"
        />
        <xsl:choose>
            <xsl:when test="$test &lt; 1">
                <xsl:value-of select="$result" />
            </xsl:when>
            <xsl:when
                test="$num1 >= $test or $num2 >= $test"
            >
                <xsl:call-template name="bitOr">
                    <xsl:with-param
                        name="num1"
                        select="$nextN1"
                    />
                    <xsl:with-param
                        name="num2"
                        select="$nextN2"
                    />
                    <xsl:with-param
                        name="result"
                        select="$result + $test"
                    />
                    <xsl:with-param
                        name="test"
                        select="$test div 2"
                    />
                </xsl:call-template>
            </xsl:when>
            <xsl:otherwise>
                <xsl:call-template name="bitOr">
                    <xsl:with-param
                        name="num1"
                        select="$nextN1"
                    />
                    <xsl:with-param
                        name="num2"
                        select="$nextN2"
                    />
                    <xsl:with-param
                        name="result"
                        select="$result"
                    />
                    <xsl:with-param
                        name="test"
                        select="$test div 2"
                    />
                </xsl:call-template>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <xsl:template name="bitXor">
        <xsl:param name="num1" />
        <xsl:param name="num2" />
        <xsl:param name="result" select="0" />
        <xsl:param name="test" select="$bit15" />
        <xsl:variable
            name="nextN1"
            select="($num1 >= $test) * ($num1 - $test) + not($num1 >= $test) * $num1"
        />
        <xsl:variable
            name="nextN2"
            select="($num2 >= $test) * ($num2 - $test) + not($num2 >= $test) * $num2"
        />
        <xsl:choose>
            <xsl:when test="$test &lt; 1">
                <xsl:value-of select="$result" />
            </xsl:when>
            <xsl:when
                test="$num1 >= $test and not($num2 >= $test)
or not($num1 >= $test) and $num2 >= $test"
            >
                <xsl:call-template name="bitXor">
                    <xsl:with-param
                        name="num1"
                        select="$nextN1"
                    />
                    <xsl:with-param
                        name="num2"
                        select="$nextN2"
                    />
                    <xsl:with-param
                        name="result"
                        select="$result + $test"
                    />
                    <xsl:with-param
                        name="test"
                        select="$test div 2"
                    />
                </xsl:call-template>
            </xsl:when>
            <xsl:otherwise>
                <xsl:call-template name="bitXor">
                    <xsl:with-param
                        name="num1"
                        select="$nextN1"
                    />
                    <xsl:with-param
                        name="num2"
                        select="$nextN2"
                    />
                    <xsl:with-param
                        name="result"
                        select="$result"
                    />
                    <xsl:with-param
                        name="test"
                        select="$test div 2"
                    />
                </xsl:call-template>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    <xsl:template name="bitNot">
        <xsl:param name="num" />
        <xsl:param name="result" select="0" />
        <xsl:param name="test" select="$bit15" />
        <xsl:choose>
            <xsl:when test="$test &lt; 1">
                138
                <xsl:value-of select="$result" />
            </xsl:when>
            <xsl:when test="$num >= $test">
                <xsl:call-template name="bitNot">
                    <xsl:with-param
                        name="num"
                        select="$num - $test"
                    />
                    <xsl:with-param
                        name="result"
                        select="$result"
                    />
                    <xsl:with-param
                        name="test"
                        select="$test div 2"
                    />
                </xsl:call-template>
            </xsl:when>
            <xsl:otherwise>
                <xsl:call-template name="bitNot">
                    <xsl:with-param
                        name="num"
                        select="$num"
                    />
                    <xsl:with-param
                        name="result"
                        select="$result + $test"
                    />
                    <xsl:with-param
                        name="test"
                        select="$test div 2"
                    />
                </xsl:call-template>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
</xsl:stylesheet>
```

## Обсуждение

Этот способ проверки битов (шаблон `bitTest`), основанный на арифметике по модулю, обсуждался на конференции XML DevCon, состоявшейся в 2001 году в Лондоне. Мы реализовали поразрядные логические операции рекурсивно с помощью операций сравнения и вычитания, но можно было бы воспользоваться операциями деления и взятия остатка, как показано ниже:

```xml
<xsl:template name="bitAnd">
    <xsl:param name="num1" />
    <xsl:param name="num2" />
    <xsl:param name="result" select="0" />
    <xsl:param name="pow2" select="$bit0" />
    <xsl:choose>
        <xsl:when test="$num1 &lt; 1 or $num2 &lt; 1">
            <xsl:value-of select="$result" />
        </xsl:when>
        <xsl:when test="$num1 mod 2 and $num2 mod 2">
            <xsl:call-template name="bitAnd">
                <xsl:with-param
                    name="num1"
                    select="floor($num1 div 2)"
                />
                <xsl:with-param
                    name="num2"
                    select="floor($num2 div 2)"
                />
                <xsl:with-param
                    name="result"
                    select="$result + $pow2"
                />
                <xsl:with-param
                    name="pow2"
                    select="$pow2 * 2"
                />
                Проверка битов
            </xsl:call-template>
        </xsl:when>
        <xsl:otherwise>
            <xsl:call-template name="bitAnd">
                <xsl:with-param
                    name="num1"
                    select="floor($num1 div 2)"
                />
                <xsl:with-param
                    name="num2"
                    select="floor($num2 div 2)"
                />
                <xsl:with-param
                    name="result"
                    select="$result"
                />
                <xsl:with-param
                    name="pow2"
                    select="$pow2 * 2"
                />
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

```xml
<xsl:template name="bitOr">
    <xsl:param name="num1" />
    <xsl:param name="num2" />
    <xsl:param name="result" select="0" />
    <xsl:param name="pow2" select="$bit0" />
    <xsl:choose>
        <xsl:when test="$num1 &lt; 1 and $num2 &lt; 1">
            <xsl:value-of select="$result" />
        </xsl:when>
        <xsl:when
            test="boolean($num1 mod 2) or boolean($num2 mod 2)"
        >
            <xsl:call-template name="bitOr">
                <xsl:with-param
                    name="num1"
                    select="floor($num1 div 2)"
                />
                <xsl:with-param
                    name="num2"
                    select="floor($num2 div 2)"
                />
                <xsl:with-param
                    name="result"
                    select="$result + $pow2"
                />
                <xsl:with-param
                    name="pow2"
                    select="$pow2 * 2"
                />
            </xsl:call-template>
        </xsl:when>
        <xsl:otherwise>
            <xsl:call-template name="bitOr">
                <xsl:with-param
                    name="num1"
                    select="floor($num1 div 2)"
                />
                <xsl:with-param
                    name="num2"
                    select="floor($num2 div 2)"
                />
                <xsl:with-param
                    name="result"
                    select="$result"
                />
                <xsl:with-param
                    name="pow2"
                    select="$pow2 * 2"
                />
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

```xml
<xsl:template name="bitXor">
    <xsl:param name="num1" />
    <xsl:param name="num2" />
    <xsl:param name="result" select="0" />
    <xsl:param name="pow2" select="$bit0" />
    <xsl:choose>
        <xsl:when test="$num1 &lt; 1 and $num2 &lt; 1">
            <xsl:value-of select="$result" />
        </xsl:when>
        <xsl:when test="$num1 mod 2 + $num2 mod 2 = 1">
            <xsl:call-template name="bitXor">
                <xsl:with-param
                    name="num1"
                    select="floor($num1 div 2)"
                />
                <xsl:with-param
                    name="num2"
                    select="floor($num2 div 2)"
                />
                <xsl:with-param
                    name="result"
                    select="$result + $pow2"
                />
                <xsl:with-param
                    name="pow2"
                    select="$pow2 * 2"
                />
            </xsl:call-template>
        </xsl:when>
        <xsl:otherwise>
            <xsl:call-template name="bitXor">
                <xsl:with-param
                    name="num1"
                    select="floor($num1 div 2)"
                />
                <xsl:with-param
                    name="num2"
                    select="floor($num2 div 2)"
                />
                <xsl:with-param
                    name="result"
                    select="$result"
                />
                <xsl:with-param
                    name="pow2"
                    select="$pow2 * 2"
                />
            </xsl:call-template>
        </xsl:otherwise>
    </xsl:choose>
</xsl:template>
```

### XSLT 2.0

Найти решение для версии 2.0 оставляю читателю в качестве упражнения. Как и в других рецептах, следует преобразовать шаблоны в функции и заменить идиоматические выражения для работы с булевскими величинами – `($num1 >= $test) * ($num1 - $test) + not($num1 >= $test) * $num1` – выражениями if-then-else.
