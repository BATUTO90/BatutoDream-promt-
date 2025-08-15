# Chat-bot-generador-de-promts
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Full-featured Prompt Generator — CLI Version (English)
- Generates 5 unique, copy-ready prompts per run.
- 100 sensual fashion poses (miniskirt + matching lingerie, and short youthful dresses, all with thong teasing, orgasmic facial expression, and direct gaze).
- 20 secretary outfits (no glasses) and 20 schoolgirl uniforms, all matching the same sensual/thong/teasing/expressive style.
- Short, easy-to-copy prompts.
- pyperclip support for one-key copy.
"""

import random

try:
    import pyperclip
    HAS_PYPERCLIP = True
except ImportError:
    HAS_PYPERCLIP = False

fashion = {
    "poses": [
        # --- 50 poses: miniskirt and matching lingerie, thong teasing, direct gaze, orgasmic facial expression ---
        "standing, slightly lifting her miniskirt to reveal her matching thong, direct gaze at the viewer, face in ecstasy",
        "sitting on the edge of the bed, legs apart, thong visible under her miniskirt, orgasmic expression at the viewer",
        "crouching down to pick something up, miniskirt rides up, thong peeking, intense gaze and parted lips of pleasure",
        "leaning against the wall, raising her office miniskirt to tease her thong, challenging look and moaning face",
        "back to the viewer, turning her head, miniskirt up revealing thong, pleasure on her face",
        "sitting on a table, legs crossed, thong teasing under her miniskirt, playful gaze and blissful expression",
        "dancing in a short miniskirt, skirt flares up to show thong, seductive look and climax face",
        "walking upstairs, miniskirt slides up, thong peeking, glancing back at the viewer in pleasure",
        "reclined on a sofa, one leg up, miniskirt falls back to show thong, orgasmic expression at the viewer",
        "posing in a squat, miniskirt up, thong on display, burning gaze and open mouth of pleasure",
        "standing in front of a mirror, lifting her miniskirt with one hand to show her thong, direct gaze and ecstatic face",
        "kneeling on the bed, miniskirt rolled up revealing her thong, arched body and orgasmic face at the viewer",
        "leaning on a railing, miniskirt up, thong visible, challenging gaze and pleasure on her face",
        "lying on her back, knees bent, miniskirt slipped up, thong on display, lost-in-pleasure look at the viewer",
        "dancing on a chair, short miniskirt up, thong in view, climax face at the viewer",
        "sitting at the pool’s edge, legs apart, wet miniskirt clings, thong visible, blissful expression at the viewer",
        "spinning playfully, miniskirt flying up, thong flashing, direct gaze and moaning mouth",
        "standing with hands overhead, miniskirt lifted, thong on show, ecstasy on her face at the viewer",
        "bending over a desk, miniskirt up, thong visible, challenging look and intense pleasure face",
        "sitting with legs pulled up, miniskirt stretched, thong teasing, playful gaze and orgasmic expression",
        "taking a selfie, lifting her miniskirt to show her thong, lustful gaze and pleasure on her face",
        "relaxing in a hammock, miniskirt rolled up, thong exposed, direct gaze and parted lips in pleasure",
        "in the kitchen, leaning over the counter, miniskirt up showing thong, playful gaze and blissful face",
        "crouching to tie shoes, miniskirt up, thong peeking, intense gaze and pleasure on her face",
        "sitting on the floor, knees up, miniskirt up, thong visible, direct gaze and orgasmic look",
        "dancing in front of a mirror, miniskirt up, thong visible, lustful gaze and ecstatic face",
        "leaning on a chair back, miniskirt up, thong on display, blissful face and direct gaze",
        "back to the viewer, turning, lifting miniskirt to show thong, pleasure in her expression",
        "sitting with one leg over the other, miniskirt slipped, thong peeking, burning gaze and open mouth",
        "kneeling on the sofa, miniskirt up, thong visible, seductive gaze and orgasmic face",
        "lying on her side, miniskirt stretched to show thong, gaze at the viewer, face in ecstasy",
        "leaning against a window, miniskirt up, thong exposed, intense gaze and pleasure face",
        "crouched at the closet, miniskirt up, thong visible, direct gaze and moaning expression",
        "picking up a book from the floor, miniskirt rides up, thong peeking, playful gaze and pleasure",
        "sitting at the bar, legs apart, miniskirt up, thong on view, playful gaze and open mouth",
        "dancing in the hallway, miniskirt flying, thong visible, blissful face and direct gaze",
        "standing by the window, miniskirt lifted, thong on show, challenging gaze and pleasure on her face",
        "kneeling on the bed, miniskirt rolled up, thong visible, intense gaze and orgasmic face",
        "sitting on a stool, short miniskirt, thong exposed, direct gaze and pleasure on her face",
        "crouched petting a cat, miniskirt up, thong peeking, playful gaze and blissful face",
        "raising her leg onto the table, miniskirt up, thong on show, challenging gaze and orgasmic look",
        "showering outdoors, wet miniskirt clings, thong visible, blissful expression at the viewer",
        "sitting on a rug, miniskirt rolled up, thong visible, direct gaze and parted lips in pleasure",
        "leaning on the counter, miniskirt up, matching thong, intense gaze and pleasure on her face",
        "dancing sensually, miniskirt rising, thong on view, pleasure-filled gaze at the viewer",
        "straddling a chair, miniskirt rolled, thong visible, playful gaze and orgasmic face",
        "standing with miniskirt blown up by the wind, thong exposed, blissful face at the viewer",
        "bending over on the bed, miniskirt up, thong visible, burning gaze and ecstatic face",
        "lying on the floor, one leg up, miniskirt rides up, thong peeking, direct gaze and pleasure face",

        # --- 50 poses: short youthful dresses, teasing lingerie, direct gaze, orgasmic facial expression ---
        "standing in a tight mini dress, lifting the hem to tease her lingerie, direct gaze and pleasure on her face",
        "sitting on the bed in a patterned short dress, legs apart, lingerie visible, blissful expression at the viewer",
        "bending forward in a strappy youthful dress, hem up, lingerie peeking, challenging gaze and orgasmic face",
        "leaning against the wall in a sequin short dress, hem up to show lingerie, playful gaze and pleasure smile",
        "twirling in a skater dress, skirt flying, lingerie visible, ecstatic face at the viewer",
        "sitting on the sofa in a floral mini dress, one leg over the other, lingerie peeking, burning gaze and open mouth",
        "dancing in a tight youthful dress, hem rides up, lingerie showing, seductive gaze and climax face",
        "walking upstairs, short dress slides up, lingerie peeking, glancing back at the viewer in pleasure",
        "reclined on the bed in a lace mini dress, legs apart, lingerie visible, orgasmic face at the viewer",
        "posing sideways in a satin short dress, hem up, lingerie teasing, challenging gaze and pleasure",
        "standing before a mirror in a youthful dress, lifting the hem to show lingerie, direct gaze and ecstatic face",
        "kneeling on a rug in a plaid mini dress, skirt up, lingerie visible, intense gaze and blissful face",
        "leaning on a bar in a cotton short dress, hem up, lingerie visible, pleasure gaze and orgasmic face",
        "lying on her back in a strappy mini dress, knees bent, lingerie showing, lost-in-pleasure look at the viewer",
        "dancing on a chair in a youthful dress, hem up, lingerie peeking, blissful face at the viewer",
        "sitting poolside in a mini dress, legs apart, lingerie showing, blissful expression at the viewer",
        "spinning in a tight dress, hem up, lingerie showing, direct gaze and moaning mouth",
        "standing in a youthful dress, hands overhead, lifting the hem to show lingerie, ecstasy on her face",
        "bending over a table in a short dress, hem up teasing lingerie, challenging gaze and intense pleasure face",
        "sitting with knees bent in a mini dress, hem stretched, lingerie teasing, playful gaze and orgasmic face",
        "taking a selfie in a youthful dress, lifting the hem to show lingerie, lustful gaze and pleasure expression",
        "relaxing in a hammock in a short dress, hem rolled up, lingerie visible, direct gaze and parted lips",
        "in the kitchen in a tight dress, leaning over, hem up, lingerie showing, playful gaze and blissful face",
        "crouching to tie shoes in a mini dress, hem up, lingerie peeking, intense gaze and pleasure look",
        "sitting on the floor in a short dress, knees up, lingerie visible, direct gaze and orgasmic expression",
        "dancing before a mirror in a youthful dress, hem rising, lingerie peeking, lustful gaze and blissful face",
        "leaning on a chair back in a mini dress, hem up, lingerie visible, blissful face and direct gaze",
        "back to the viewer, turning, lifting a short dress to show lingerie, pleasure in her expression",
        "sitting with one leg over the other in a youthful dress, hem slipped, lingerie peeking, burning gaze and open mouth",
        "kneeling on the sofa in a short dress, hem rolled up, lingerie visible, seductive gaze and orgasmic face",
        "lying on her side in a mini dress, hem stretched to show lingerie, gaze at the viewer, face in ecstasy",
        "leaning against a window in a youthful dress, hem up, lingerie exposed, intense gaze and pleasure face",
        "crouched at a closet in a mini dress, hem up, lingerie visible, direct gaze and moaning expression",
        "picking up a book from the floor in a short dress, hem rides up, lingerie peeking, playful gaze and pleasure",
        "sitting at the bar in a youthful dress, legs apart, hem up, lingerie on view, playful gaze and open mouth",
        "dancing in the hallway in a mini dress, skirt flying, lingerie visible, blissful face and direct gaze",
        "standing by the window in a short dress, hem lifted, lingerie on show, challenging gaze and pleasure on her face",
        "kneeling on the bed in a mini dress, hem rolled up, lingerie visible, intense gaze and orgasmic face",
        "sitting on a stool in a youthful dress, short hem, lingerie exposed, direct gaze and pleasure on her face",
        "crouched petting a cat in a mini dress, hem up, lingerie peeking, playful gaze and blissful face",
        "raising her leg onto the table in a short dress, hem up, lingerie on show, challenging gaze and orgasmic look",
        "showering outdoors in a wet mini dress, lingerie visible, blissful expression at the viewer",
        "sitting on a rug in a youthful dress, hem rolled up, lingerie visible, direct gaze and parted lips",
        "leaning on the counter in a tight dress, hem up, matching lingerie, intense gaze and pleasure on her face",
        "dancing sensually in a mini dress, hem rising, lingerie on view, pleasure-filled gaze at the viewer",
        "straddling a chair in a short dress, hem rolled, lingerie visible, playful gaze and orgasmic face",
        "standing with the dress blown up by the wind, lingerie exposed, blissful face at the viewer",
        "bending over on the bed in a mini dress, hem up, lingerie visible, burning gaze and ecstatic face",
        "lying on the floor in a youthful dress, one leg up, hem rides up, lingerie peeking, direct gaze and pleasure face",

        # --- 20 poses: secretary outfits (no glasses) ---
        "standing by the desk in a tight secretary miniskirt, adjusting the skirt to tease her thong, direct gaze and pleasure face",
        "sitting on the office table, legs parted, miniskirt riding up to show her thong, blissful expression at the viewer",
        "bending over to file documents, secretary miniskirt slides up, thong visible, intense gaze and parted lips",
        "leaning against the wall, office miniskirt raised, thong on show, challenging look and moaning face",
        "sitting in a swivel chair, crossing legs, miniskirt slips up, thong visible, pleasure face at the viewer",
        "discreetly dancing at the office, short secretary miniskirt flares up, thong peeking, seductive gaze and climax face",
        "handing over reports, leaning forward, secretary miniskirt up, thong visible, playful gaze and blissful face",
        "lying on the desk, one leg up, miniskirt back, thong showing, orgasmic face at the viewer",
        "crouched picking up papers, miniskirt up, thong visible, burning gaze and open mouth of pleasure",
        "organizing the shelf, office miniskirt up, thong visible, direct gaze and blissful face",
        "sitting with a leg up on the desk, secretary miniskirt up, thong visible, challenging gaze and moaning face",
        "standing by the office window, miniskirt up, thong teasing, sensual look at the viewer",
        "leaning to check a binder, miniskirt up, thong peeking, playful gaze and orgasmic face",
        "sitting on the boardroom table, short miniskirt, thong visible, blissful face and direct gaze",
        "leaning on the copy machine, office miniskirt up, thong exposed, pleasure face at the viewer",
        "filing on a high shelf, secretary miniskirt slides up, thong peeking, blissful face and direct gaze",
        "standing at the whiteboard, office miniskirt up, thong visible, ecstasy on her face at the viewer",
        "sitting on the desk, crossing her legs, miniskirt up, thong visible, burning gaze and open mouth",
        "leaning over the keyboard, secretary miniskirt up, thong exposed, seductive gaze and orgasmic face",
        "back to the viewer, turning, office miniskirt up, thong visible, pleasure on her face",

        # --- 20 poses: schoolgirl uniforms ---
        "standing in the classroom, slightly lifting her schoolgirl skirt to show her thong, direct gaze and pleasure face",
        "sitting at her desk, legs apart, thong visible under her schoolgirl skirt, blissful expression at the viewer",
        "crouching to pick up supplies, schoolgirl skirt up, thong visible, intense gaze and parted lips",
        "leaning against the hallway wall, skirt up, thong peeking, challenging look and moaning face",
        "back in line, turning, schoolgirl skirt up, thong visible, pleasure on her face",
        "sitting on the classroom table, legs crossed, skirt slipped up, thong visible, playful gaze and blissful face",
        "dancing at the school party, schoolgirl skirt flares up, thong visible, seductive gaze and climax face",
        "walking up the stairs, schoolgirl skirt up, thong peeking, glancing back at the viewer in pleasure",
        "lying on the desk, one leg up, schoolgirl skirt back, thong showing, orgasmic face at the viewer",
        "posing in a squat, schoolgirl skirt up, thong exposed, burning gaze and open mouth of pleasure",
        "standing before the board, lifting her schoolgirl skirt with one hand to show her thong, direct gaze and ecstatic face",
        "kneeling in the classroom, skirt rolled up, thong visible, arched body and pleasure face at the viewer",
        "leaning on a desk, schoolgirl skirt up, thong visible, challenging gaze and blissful face",
        "lying on her back on the table, knees bent, skirt up, thong showing, lost-in-pleasure look at the viewer",
        "dancing on a chair, short schoolgirl skirt up, thong in view, orgasmic face at the viewer",
        "sitting in the courtyard, legs apart, wet schoolgirl skirt clings, thong visible, blissful expression at the viewer",
        "twirling in her schoolgirl skirt, skirt flying, thong flashing, direct gaze and moaning mouth",
        "standing with hands overhead, schoolgirl skirt up, thong on show, ecstasy on her face at the viewer",
        "bending over a desk, schoolgirl skirt up, thong visible, challenging look and intense pleasure face",
        "sitting with legs pulled up, schoolgirl skirt stretched, thong teasing, playful gaze and orgasmic face",
    ],
    "miniskirts": [
        "black leather pleated miniskirt",
        "red velvet ultra-short miniskirt",
        "white denim tight miniskirt",
        "pink satin flared miniskirt",
        "blue plaid schoolgirl miniskirt",
        "green sequin shiny miniskirt",
        "purple tulle layered miniskirt",
        "yellow chiffon flowy miniskirt",
        "black mesh transparent miniskirt",
        "red latex shiny miniskirt",
        "white lace delicate miniskirt",
        "blue denim cutoff miniskirt",
        "green velvet wrap miniskirt",
        "pink leather high-waist miniskirt",
        "purple satin asymmetric miniskirt",
        "yellow plaid pleated miniskirt",
        "black chiffon sheer miniskirt",
        "red sequin glittering miniskirt",
        "white tulle ballerina miniskirt",
        "blue leather bodycon miniskirt"
    ],
    "blouses": [
        "white sheer chiffon blouse",
        "black silk blouse",
        "red lace blouse",
        "pink satin blouse",
        "blue cotton blouse",
        "green velvet blouse",
        "purple mesh blouse",
        "yellow linen blouse",
        "black sequin blouse",
        "red chiffon blouse",
        "white satin blouse",
        "pink lace blouse",
        "blue velvet blouse",
        "green silk blouse",
        "purple chiffon blouse",
        "yellow mesh blouse",
        "black cotton blouse",
        "red satin blouse",
        "white velvet blouse",
        "pink silk blouse"
    ],
    "dresses": [
        "black sheath mini dress",
        "red bodycon mini dress",
        "white slip mini dress",
        "pink halter mini dress",
        "blue wrap mini dress",
        "green off-shoulder mini dress",
        "purple A-line mini dress",
        "yellow sundress mini dress",
        "black cocktail mini dress",
        "red evening mini dress",
        "white lace mini dress",
        "pink skater mini dress",
        "blue maxi mini dress",
        "green shift mini dress",
        "purple tunic mini dress",
        "yellow babydoll mini dress",
        "black velvet mini dress",
        "red satin mini dress",
        "white chiffon mini dress",
        "pink leather mini dress"
    ],
    "lingerie_thongs": [
        "black lace thong",
        "red satin thong",
        "white mesh thong",
        "pink lace thong",
        "blue silk thong",
        "green velvet thong",
        "purple satin thong",
        "yellow chiffon thong",
        "black mesh thong",
        "red lace thong",
        "white satin thong",
        "pink silk thong",
        "blue velvet thong",
        "green lace thong",
        "purple mesh thong",
        "yellow satin thong",
        "black chiffon thong",
        "red mesh thong",
        "white lace thong",
        "pink velvet thong"
    ],
    "lingerie_bras": [
        "black lace bra",
        "red satin bra",
        "white mesh bra",
        "pink lace bra",
        "blue silk bra",
        "green velvet bra",
        "purple satin bra",
        "yellow chiffon bra",
        "black mesh bra",
        "red lace bra",
        "white satin bra",
        "pink silk bra",
        "blue velvet bra",
        "green lace bra",
        "purple mesh bra",
        "yellow satin bra",
        "black chiffon bra",
        "red mesh bra",
        "white lace bra",
        "pink velvet bra"
    ],
    "stockings": [
        "black lace thigh-high stockings",
        "red fishnet thigh-high stockings",
        "white silk thigh-high stockings",
        "pink lace thigh-high stockings",
        "blue velvet thigh-high stockings",
        "green satin thigh-high stockings",
        "purple mesh thigh-high stockings",
        "yellow chiffon thigh-high stockings",
        "black opaque thigh-high stockings",
        "red sheer th
Este proyecto es un chatbot que genera imágenes automáticamente usando **Stable Diffusion**.  
El bot responde a cualquier petición del usuario generando una imagen en un estilo **ultra realista**, con iluminación cinematográfica, render tipo **Unreal Engine 5** y alto nivel de detalle.

## ¿Cómo funciona?

1. El usuario escribe cualquier texto al chatbot.
2. El bot toma ese texto y lo convierte en una imagen usando la API de Stable Diffusion.
3. Todas las imágenes generadas tendrán el siguiente estilo fijo:
   - ultra-realistic
   - cinematic lighting
   - Unreal Engine 5 render
   - high detail
4. **Las imágenes se generan en formato 9:16** (vertical), ideales para usarlas como fondos de pantalla de celular.

## ¿Cómo usarlo?

1. Clona este repositorio o descárgalo.
2. Instala las dependencias necesarias (por ejemplo, `requests` si usas Python).
3. Coloca tu **API key** de Stable Diffusion en un archivo llamado `.env` o `sai_platform_key.txt` (según cómo lo uses).
4. Ejecuta el bot y escribe cualquier texto para recibir una imagen generada.

## Ejemplo de prompt usado

El bot siempre añade el estilo al prompt del usuario.  
Por ejemplo, si el usuario escribe:  
> Un perro en la nieve

El prompt enviado a Stable Diffusion será:  
> Un perro en la nieve, ultra-realistic, cinematic lighting, Unreal Engine 5 render, high detail

## Configuración de la API Key

Crea un archivo `.env` o `sai_platform_key.txt` y coloca tu API key de Stable Diffusion así:

