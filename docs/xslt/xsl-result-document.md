---
description: Used to direct output to a secondary output destination
---

# xsl:result-document

Used to direct output to a secondary output destination.

_Available in XSLT 2.0 and later versions. Available in all Saxon editions._

-   **Категория**: instruction
-   **Содержимое**: _sequence-constructor_
-   **Допустимые родительские элементы**: any XSLT element whose content model is _sequence-constructor_; any literal result element

## Атрибуты

`format?`
: _{ eqname }_
: If present, it gives the name of an [`xsl:output`](xsl-output.md) element that describes the serialization format for this output document; if absent, the unnamed `xsl:output` declaration is used.

`href?`
: _{ uri }_
: The URI for the result document. If this is a relative URI, it is interpreted relative to the base output URI. The base output URI is the systemID of the result object supplied as the destination for the transformation, or if you are using the command line, the value of the -o flag. If the href attribute is omitted, the document is written to the location identified by the base output URI: this will only work if all the output produced by the stylesheet is within the scope of an `xsl:result-document` instruction.

: If the base output URI is not known, and the supplied `href` is not absolute, then this results in a failure.

: This base output URI must be a writable location. Usually it will therefore be a URI that uses the "file:" scheme. However, Saxon attempts to open a connection whatever URI scheme is used, and it should therefore work with any URI where the Java VM has the capability to open a writable connection. Users have reported success in using "ftp:" and "mailto:" URIs.

: If the configuration option `Feature.ALLOW-EXTERNAL-FUNCTIONS` is set, then for security reasons use of the `xsl:result-document` instruction with the `href` attribute is disallowed.

`validation?`
: `"strict" | "lax" | "preserve" | "strip"`
: Requires Saxon-PE or Saxon-EE.

`type?`
: _eqname_
: Determines what happens to any type annotations on element or attribute nodes. Requires Saxon-PE or Saxon-EE.

`method?`
: `{ "xml" | "html" | "xhtml" | "text" | "json" | "adaptive" | eqname }`
: Serialization attribute, see Details for more information.

`allow-duplicate-names?`
: _{ boolean }_
: Serialization attribute, see Details for more information.

`build-tree?`
: _{ boolean }_
: Serialization attribute, see Details for more information.

`byte-order-mark?`
: _{ boolean }_
: Serialization attribute, see Details for more information.

`cdata-section-elements?`
: _{ eqnames }_
: Serialization attribute, see Details for more information.

`doctype-public?`
: _{ string }_
: Serialization attribute, see Details for more information.

`doctype-system?`
: _{ string }_
: Serialization attribute, see Details for more information.

`encoding?`
: _{ string }_
: Serialization attribute, see Details for more information.

`escape-uri-attributes?`
: _{ boolean }_
: Serialization attribute, see Details for more information.

`html-version?`
: _{ decimal }_
: Serialization attribute, see Details for more information.

`include-content-type?`
: _{ boolean }_
: Serialization attribute, see Details for more information.

`indent?`
: _{ boolean }_
: Serialization attribute, see Details for more information.

`item-separator?`
: _{ string }_
: Not available in XSLT.

`json-node-output-method?`
: `{ "xml" | "html" | "xhtml" | "text" | eqname }`
: Serialization attribute, see Details for more information.

`media-type?`
: _{ string }_
: Serialization attribute, see Details for more information.

`normalization-form?`
: `{ "NFC" | "NFD" | "NFKC" | "NFKD" | "fully-normalized" | "none" | nmtoken }`
: Serialization attribute, see Details for more information.

`omit-xml-declaration?`
: _{ boolean }_
: Serialization attribute, see Details for more information.

`parameter-document?`
: _{ uri }_
: New in XSLT 3.0. Not implemented in Saxon 9.7. Allows serialization to be configured in an external document.

`standalone?`
: `{ boolean | "omit" }`
: Serialization attribute, see Details for more information.

`suppress-indentation?`
: _{ eqnames }_
: Serialization attribute, see Details for more information.

`undeclare-prefixes?`
: _{ boolean }_
: Serialization attribute, see Details for more information.

`use-character-maps?`
: _eqnames_
: Serialization attribute, see Details for more information.

`output-version?`
: _{ nmtoken }_
: Overrides the `version` attribute specified on the output definition. Serialization attribute, see Details for more information.

`saxon:asynchronous?`
: _boolean_
: The default for Saxon-EE is `yes`, which causes the instruction to be evaluated in a separate thread, if there is a spare thread available (the maximum number of threads used is configurable using `Feature.RESULT_DOCUMENT_THREADS`). Use `no` to suppress multi-threading. Asynchronous processing of `xsl:result-document` is automatically suppressed if tracing (using a `TraceListener`) is enabled. For details see `saxon:asynchronous` and notes below.

## Заметки по реализации Saxon

Since Saxon 9.5, the `xsl:result-document` instruction in Saxon-EE is asynchronous. That is, the code to output the result document runs in a separate thread, in parallel with other processing. The maximum number of threads used by `xsl:result-document` instructions is limited by the configuration option `Feature.RESULT_DOCUMENT_THREADS` which defaults to the number of processors available to the Java VM; setting this to zero or one will suppress multithreading. Setting `Feature.ALLOW_MULTITHREADING` to false has the same effect. (This can be useful when debugging, because otherwise the output from `xsl:message` and `fn:trace()` can be very confusing).

Asynchrony can also potentially cause problems if the code calls extension functions that have side-effects. Multi-threading can therefore be controlled, if required, using the `saxon:asynchronous` attribute on the `xsl:result-document` instruction: use `saxon:asynchronous="no"` to suppress multi-threading. Asynchronous processing of `xsl:result-document` is automatically suppressed if tracing (using a `TraceListener`) is enabled.

The `xsl:result-document` instruction may also take the extension serialization parameter `saxon:indent-spaces`. This attribute may be an AVT, so the values can be decided at run-time. Any values specified on the `xsl:result-document` instruction override the values specified on the `xsl:output` declaration.

The new XSLT 3.0 attribute `parameter-document` is first implemented in Saxon 9.8.

There is a change in Saxon 9.9 regarding the way in which an `xsl:result-document` instruction with no `href` attribute is handled. In previous releases Saxon attempted to reuse the output stream established for the primary output of the transformation. The new XSLT 3.0 options (such as raw output) make this difficult, and possibly non-conformant. The new model is therefore that the `href` attribute simply defaults to the base output URI, and is otherwise handled in the same way as any other call on `xsl:result-document`. This means that when no base output URI is supplied, this case will now cause a failure. It also means that when a user written result document resolver is in use, it will be called to handle this case with the base output URI supplied as the URI argument. For more information, see Resolving the URIs of Output Files.

## Подробности

The `xsl:result-document` element was introduced in XSLT 2.0, obsoleting the previous extension element `saxon6:output` (which is reinstated in Saxon 9.9 as a synonym for `xsl:result-document` since legacy stylesheets still use it).

The destination of the result document can be altered programmatically as described in Resolving the URIs of Output Files. In other cases the document is serialized and written to the file identified by the URI in the `href` attribute, resolved if it is relative against the base output URI for the transformation (which defaults to the destination of the principal output document). The destination must use the `file:/` URI scheme. Any previous file at this location is overwritten. If the transformation fails with a dynamic error, the content of any output files is undefined (no attempt is made to reset them to their original state).

The serialization attributes `method`, `allow-duplicate-names`, `build-tree`, `byte-order-mark`, `cdata-section-elements`, `doctype-public`, `doctype-system`, `encoding`, `escape-uri-attributes`, `html-version`, `include-content-type`, `indent`, `item-separator`, `json-node-output-method`, `media-type`, `normalization-form`, `omit-xml-declaration`, `standalone`, `suppress-indentation`, `undeclare-prefixes`, `use-character-maps`, and `output-version` may be used to override attributes defined in an output definition. For full definitions of these attributes, see the corresponding [`xsl:output`](xsl-output.md) element documentation.

Except for `use-character-maps`, any of these serialization attributes may be an AVT, so the values can be decided at run-time. For any of these attributes that is present on the `xsl:result-document` instruction, the effective value of the attribute overrides or supplements the corresponding value from the output definition. In the case of `cdata-section-elements` and `suppress-indentation`, the value of the serialization parameter is the union of the expanded names of the elements named in this instruction and the elements named in the selected output definition. In the case of `use-character-maps`, the character maps referenced in this instruction supplement and take precedence over those defined in the output definition. In all other cases, values of serialization attributes on the `xsl:result-document` instruction take precedence.

## Примеры

In the following, the body of the preface is directed to a file called `preface.html` (prefixed by a constant that supplies the directory name). Output then reverts to the previous destination, where an HTML hyperlink to the newly created file is inserted.

```xslt
<xsl:template match="preface">
    <xsl:result-document href="{$dir}/preface.html" method="html">
        <html><body bgcolor="#00eeee"><center>
            <xsl:apply-templates/>
        </center><hr/></body></html>
    </xsl:result-document>
    <a href="{$dir}/preface.html">Preface</a>
</xsl:template>
```

## Ссылки

-   [XSLT 2.0 Specification](http://www.w3.org/TR/xslt20/#element-result-document)
-   [XSLT 3.0 Specification](http://www.w3.org/TR/xslt-30/#element-result-document)
-   [Saxon](https://www.saxonica.com/html/documentation/xsl-elements/result-document.html)

## См. также

-   [`xsl:output`](xsl-output.md)
