/* Code generated by cmd/cgo; DO NOT EDIT. */

/* package xmlquerydll */


#line 1 "cgo-builtin-export-prolog"

#include <stddef.h>

#ifndef GO_CGO_EXPORT_PROLOGUE_H
#define GO_CGO_EXPORT_PROLOGUE_H

#ifndef GO_CGO_GOSTRING_TYPEDEF
typedef struct { const char *p; ptrdiff_t n; } _GoString_;
#endif

#endif

/* Start of preamble from import "C" comments.  */


#line 3 "main.go"

#include <stdlib.h>
#include <string.h>

#line 1 "cgo-generated-wrapper"


/* End of preamble from import "C" comments.  */


/* Start of boilerplate cgo prologue.  */
#line 1 "cgo-gcc-export-header-prolog"

#ifndef GO_CGO_PROLOGUE_H
#define GO_CGO_PROLOGUE_H

typedef signed char GoInt8;
typedef unsigned char GoUint8;
typedef short GoInt16;
typedef unsigned short GoUint16;
typedef int GoInt32;
typedef unsigned int GoUint32;
typedef long long GoInt64;
typedef unsigned long long GoUint64;
typedef GoInt32 GoInt;
typedef GoUint32 GoUint;
typedef size_t GoUintptr;
typedef float GoFloat32;
typedef double GoFloat64;
#ifdef _MSC_VER
#include <complex.h>
typedef _Fcomplex GoComplex64;
typedef _Dcomplex GoComplex128;
#else
typedef float _Complex GoComplex64;
typedef double _Complex GoComplex128;
#endif

/*
  static assertion to make sure the file is being used on architecture
  at least with matching size of GoInt.
*/
typedef char _check_for_32_bit_pointer_matching_GoInt[sizeof(void*)==32/8 ? 1:-1];

#ifndef GO_CGO_GOSTRING_TYPEDEF
typedef _GoString_ GoString;
#endif
typedef void *GoMap;
typedef void *GoChan;
typedef struct { void *t; void *v; } GoInterface;
typedef struct { void *data; GoInt len; GoInt cap; } GoSlice;

#endif

/* End of boilerplate cgo prologue.  */

#ifdef __cplusplus
extern "C" {
#endif

extern __declspec(dllexport) void ReleaseNode(GoInt sIndex);
extern __declspec(dllexport) GoUint8 AddAttr(GoInt nIndex, char* cStrKey, char* cStrValue);
extern __declspec(dllexport) GoUint8 AddChild(GoInt nIndex, GoInt nIndex2);
extern __declspec(dllexport) GoUint8 AddSibling(GoInt nIndex, GoInt nIndex2);
extern __declspec(dllexport) GoUint8 RemoveFromTree(GoInt nIndex);
extern __declspec(dllexport) GoUint8 Find_Each(GoInt nIndex, char* cStrExpr, GoUintptr funcCallback);
extern __declspec(dllexport) GoInt FindOne(GoInt nIndex, char* cStrExpr);
extern __declspec(dllexport) GoInt Parse(char* cHtml);
extern __declspec(dllexport) GoInt Query(GoInt nIndex, char* cStrExpr);
extern __declspec(dllexport) GoUint8 QueryAll_Each(GoInt nIndex, char* cStrExpr, GoUintptr funcCallback);
extern __declspec(dllexport) GoUint8 InnerText(GoInt nIndex, char* result);
extern __declspec(dllexport) GoUint8 OutputXML(GoInt nIndex, GoUint8 self, char* result);
extern __declspec(dllexport) GoUint8 RemoveAttr(GoInt nIndex, char* cStrKey);
extern __declspec(dllexport) GoUint8 SelectAttr(GoInt nIndex, char* cStrKey, char* result);
extern __declspec(dllexport) GoInt SelectElement(GoInt nIndex, char* cStrName);
extern __declspec(dllexport) GoUint8 SelectElements(GoInt nIndex, char* cStrName, GoUintptr funcCallback);
extern __declspec(dllexport) GoUint8 SetAttr(GoInt nIndex, char* cStrKey, char* cStrValue);

#ifdef __cplusplus
}
#endif