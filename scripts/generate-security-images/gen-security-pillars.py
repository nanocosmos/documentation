from PIL import Image, ImageDraw, ImageFont

# === DIMENSIONS ===
WIDTH = 480
HEIGHT = 560
BORDER_INSET = 6
BORDER_RADIUS = 14
BORDER_WIDTH = 2

# === HEADER ===
HEADER_HEIGHT = 115
HEADER_ACCENT_HEIGHT = 4          # thin stripe below header

# === ICON ===
ICON_SIZE = 48
ICON_CIRCLE_PADDING = 4           # extra radius around icon
ICON_SUPERSAMPLE_SCALE = 4        # for antialiased circle rendering

# === LAYOUT ===
PADDING = 36
CONTENT_TOP_MARGIN = 30           # gap between header and first bullet card
CONTENT_LEFT_EXTRA = 10           # additional left indent for bullet cards

# === BULLET CARDS ===
CARD_RADIUS = 8
CARD_PADDING_TOP = 10             # space above bullet text
CARD_PADDING_BOTTOM = 38          # space below bullet text baseline
BULLET_DOT_INSET = 18             # dot distance from card left edge
BULLET_DOT_OUTER_R = 7           # outer radius of bullet dot
BULLET_DOT_INNER_R = 3           # inner (white) radius of bullet dot
BULLET_TEXT_OFFSET_X = 18        # text gap after dot
BULLET_TEXT_OFFSET_Y = 2         # text vertical nudge within card
BULLET_VERTICAL_CENTER = 17      # vertical centering offset within spacing slot

# === TYPOGRAPHY ===
FONT_PATH_REGULAR = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FONT_PATH_BOLD    = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_SIZE_TITLE    = 38
FONT_SIZE_SUBTITLE = 14
FONT_SIZE_BULLET   = 21
FONT_SIZE_FOOTER   = 11
TITLE_OFFSET_Y     = 24           # upward offset from icon center
TITLE_SUBTITLE_GAP = 44           # gap between title baseline and subtitle
TITLE_LEFT_GAP     = 20          # gap between icon right edge and title text

# === FOOTER ===
FOOTER_LINE_OFFSET = 28           # distance from bottom for separator line
FOOTER_TEXT_OFFSET = 20           # distance from bottom for footer text
FOOTER_TITLE_RIGHT_MARGIN = 60   # right-align offset for footer title label

# === COLOURS ===
ORANGE        = (237, 125, 14)    # nanocosmos brand orange #ed7d0e
ORANGE_DARK   = (190,  90, 15)    # accent stripe below header
ORANGE_LIGHT  = (255, 246, 237)   # bullet card background
ORANGE_SUBTLE = (240, 215, 185)   # bullet card outline
ORANGE_TINT   = (255, 220, 190)   # subtitle text in header
WHITE         = (255, 255, 255)
DARK          = ( 30,  30,  30)
BORDER_COLOR  = (220, 220, 220)
FOOTER_GRAY   = (180, 180, 180)


# === HELPERS ===

def get_font(size, bold=False):
    try:
        path = FONT_PATH_BOLD if bold else FONT_PATH_REGULAR
        return ImageFont.truetype(path, size)
    except:
        return ImageFont.load_default()


def draw_rounded_rect(draw, xy, radius, fill=None, outline=None, width=1):
    x1, y1, x2, y2 = xy
    draw.rectangle([x1 + radius, y1, x2 - radius, y2], fill=fill)
    draw.rectangle([x1, y1 + radius, x2, y2 - radius], fill=fill)
    draw.pieslice([x1,            y1,            x1 + 2*radius, y1 + 2*radius], 180, 270, fill=fill)
    draw.pieslice([x2 - 2*radius, y1,            x2,            y1 + 2*radius], 270, 360, fill=fill)
    draw.pieslice([x1,            y2 - 2*radius, x1 + 2*radius, y2           ],  90, 180, fill=fill)
    draw.pieslice([x2 - 2*radius, y2 - 2*radius, x2,            y2           ],   0,  90, fill=fill)
    if outline:
        draw.arc([x1,            y1,            x1 + 2*radius, y1 + 2*radius], 180, 270, fill=outline, width=width)
        draw.arc([x2 - 2*radius, y1,            x2,            y1 + 2*radius], 270, 360, fill=outline, width=width)
        draw.arc([x1,            y2 - 2*radius, x1 + 2*radius, y2           ],  90, 180, fill=outline, width=width)
        draw.arc([x2 - 2*radius, y2 - 2*radius, x2,            y2           ],   0,  90, fill=outline, width=width)
        draw.line([x1 + radius, y1, x2 - radius, y1], fill=outline, width=width)
        draw.line([x1 + radius, y2, x2 - radius, y2], fill=outline, width=width)
        draw.line([x1, y1 + radius, x1, y2 - radius], fill=outline, width=width)
        draw.line([x2, y1 + radius, x2, y2 - radius], fill=outline, width=width)


# === ICON DRAWERS ===

def draw_lock_icon(draw, cx, cy, size, color):
    s = size
    sw = int(s * 0.5);  sh = int(s * 0.38);  lw = int(s * 0.1)
    sx = cx - sw // 2;  sy = cy - sh - int(s * 0.05)
    draw.arc([sx, sy, sx + sw, sy + sh * 2], 180, 0, fill=color, width=lw)
    bw = int(s * 0.7);  bh = int(s * 0.45)
    bx = cx - bw // 2;  by = cy - int(s * 0.05)
    draw.rounded_rectangle([bx, by, bx + bw, by + bh], radius=6, fill=color)
    kr = int(s * 0.08);  kx = cx;  ky = by + bh // 2 - int(s * 0.04)
    draw.ellipse([kx - kr, ky - kr, kx + kr, ky + kr], fill=WHITE)
    draw.polygon([(kx, ky + kr), (kx - kr, ky + int(s * 0.18)), (kx + kr, ky + int(s * 0.18))], fill=WHITE)


def draw_magnifier_icon(draw, cx, cy, size, color):
    s = size
    r = int(s * 0.32);  lw = int(s * 0.1);  off = int(s * 0.08)
    draw.ellipse([cx - r - off, cy - r - off, cx + r - off, cy + r - off], outline=color, width=lw)
    hx1 = cx + int(r * 0.55);  hy1 = cy + int(r * 0.55)
    hx2 = cx + int(r * 1.3);   hy2 = cy + int(r * 1.3)
    draw.line([hx1, hy1, hx2, hy2], fill=color, width=lw + 1)


def draw_shield_icon(draw, cx, cy, size, color):
    s = size
    w = int(s * 0.65);  h = int(s * 0.78)
    x = cx - w // 2;    y = cy - h // 2
    pts = [
        (cx,     y),
        (x + w,  y + int(h * 0.3)),
        (x + w,  y + int(h * 0.62)),
        (cx,     y + h),
        (x,      y + int(h * 0.62)),
        (x,      y + int(h * 0.3)),
    ]
    draw.polygon(pts, fill=color)
    cw = int(s * 0.08)
    draw.line([cx - int(s*0.16), cy + int(s*0.04), cx - int(s*0.03), cy + int(s*0.17)], fill=WHITE, width=cw)
    draw.line([cx - int(s*0.03), cy + int(s*0.17), cx + int(s*0.2),  cy - int(s*0.1)],  fill=WHITE, width=cw)


# === MAIN BUILDER ===

def create_infographic(title, bullets, icon_func, filename):
    img  = Image.new("RGB", (WIDTH, HEIGHT), WHITE)
    draw = ImageDraw.Draw(img)

    # Outer border
    draw_rounded_rect(draw, [BORDER_INSET, BORDER_INSET, WIDTH - BORDER_INSET, HEIGHT - BORDER_INSET],
                      radius=BORDER_RADIUS, fill=WHITE, outline=BORDER_COLOR, width=BORDER_WIDTH)

    # Orange header
    draw_rounded_rect(draw, [BORDER_INSET, BORDER_INSET, WIDTH - BORDER_INSET, HEADER_HEIGHT + BORDER_INSET],
                      radius=BORDER_RADIUS, fill=ORANGE)
    # Square off bottom corners of header
    draw.rectangle([BORDER_INSET, HEADER_HEIGHT - BORDER_RADIUS,
                    WIDTH - BORDER_INSET, HEADER_HEIGHT + BORDER_INSET], fill=ORANGE)

    # Accent stripe below header
    draw.rectangle([BORDER_INSET, HEADER_HEIGHT + BORDER_INSET,
                    WIDTH - BORDER_INSET, HEADER_HEIGHT + BORDER_INSET + HEADER_ACCENT_HEIGHT],
                   fill=ORANGE_DARK)

    # Icon — rendered at ICON_SUPERSAMPLE_SCALE× then downsampled for smooth edges
    icon_cx  = PADDING + ICON_SIZE // 2
    icon_cy  = HEADER_HEIGHT // 2 + 8
    circle_r = ICON_SIZE // 2 + ICON_CIRCLE_PADDING
    patch_sz = (circle_r * 2 + ICON_CIRCLE_PADDING) * ICON_SUPERSAMPLE_SCALE
    icon_patch = Image.new("RGBA", (patch_sz, patch_sz), (0, 0, 0, 0))
    pd = ImageDraw.Draw(icon_patch)
    pr = circle_r * ICON_SUPERSAMPLE_SCALE
    pc = patch_sz // 2
    pd.ellipse([pc - pr, pc - pr, pc + pr, pc + pr], fill=WHITE)
    icon_func(pd, pc, pc, ICON_SIZE * ICON_SUPERSAMPLE_SCALE, ORANGE)
    icon_patch = icon_patch.resize(
        (patch_sz // ICON_SUPERSAMPLE_SCALE, patch_sz // ICON_SUPERSAMPLE_SCALE), Image.LANCZOS)
    img.paste(icon_patch,
              (icon_cx - patch_sz // (ICON_SUPERSAMPLE_SCALE * 2),
               icon_cy - patch_sz // (ICON_SUPERSAMPLE_SCALE * 2)),
              icon_patch)

    # Title + subtitle
    title_font    = get_font(FONT_SIZE_TITLE, bold=True)
    subtitle_font = get_font(FONT_SIZE_SUBTITLE)
    tx = icon_cx + ICON_SIZE // 2 + TITLE_LEFT_GAP
    ty = icon_cy - TITLE_OFFSET_Y
    draw.text((tx, ty),                       title,                 font=title_font,    fill=WHITE)
    draw.text((tx, ty + TITLE_SUBTITLE_GAP),  "Security Model Layer", font=subtitle_font, fill=ORANGE_TINT)

    # Bullet cards
    content_top  = HEADER_HEIGHT + CONTENT_TOP_MARGIN
    content_left = PADDING + CONTENT_LEFT_EXTRA
    card_right   = WIDTH - PADDING - CONTENT_LEFT_EXTRA
    bullet_font  = get_font(FONT_SIZE_BULLET)
    spacing      = (HEIGHT - content_top - PADDING) // len(bullets)

    for i, bullet in enumerate(bullets):
        by    = content_top + i * spacing + spacing // 2 - BULLET_VERTICAL_CENTER
        dot_x = content_left + BULLET_DOT_INSET
        dot_y = by + CARD_PADDING_TOP + BULLET_DOT_OUTER_R - 3

        draw_rounded_rect(draw, [content_left, by - CARD_PADDING_TOP,
                                 card_right,   by + CARD_PADDING_BOTTOM],
                          radius=CARD_RADIUS, fill=ORANGE_LIGHT, outline=ORANGE_SUBTLE, width=1)

        draw.ellipse([dot_x - BULLET_DOT_OUTER_R, dot_y - BULLET_DOT_OUTER_R,
                      dot_x + BULLET_DOT_OUTER_R, dot_y + BULLET_DOT_OUTER_R], fill=ORANGE)
        draw.ellipse([dot_x - BULLET_DOT_INNER_R, dot_y - BULLET_DOT_INNER_R,
                      dot_x + BULLET_DOT_INNER_R, dot_y + BULLET_DOT_INNER_R], fill=WHITE)

        draw.text((dot_x + BULLET_TEXT_OFFSET_X, by + BULLET_TEXT_OFFSET_Y),
                  bullet, font=bullet_font, fill=DARK)

    # Footer
    footer_font = get_font(FONT_SIZE_FOOTER)
    draw.line([PADDING, HEIGHT - FOOTER_LINE_OFFSET, WIDTH - PADDING, HEIGHT - FOOTER_LINE_OFFSET],
              fill=BORDER_COLOR, width=1)
    draw.text((PADDING,                                HEIGHT - FOOTER_TEXT_OFFSET),
              "Security Architecture", font=footer_font, fill=FOOTER_GRAY)
    draw.text((WIDTH - PADDING - FOOTER_TITLE_RIGHT_MARGIN, HEIGHT - FOOTER_TEXT_OFFSET),
              title, font=footer_font, fill=ORANGE)

    img.save(filename)
    print(f"Saved: {filename}")


# === GENERATE ALL THREE ===
create_infographic(
    "PREVENTION",
    [
        "Role-Based Access Control",
        "Secure Ingest (Webhooks)",
        "Secure Playback (Tokens)",
        "Secure Transport (TLS)",
        "Referrer Allow-Listing",
    ],
    draw_lock_icon,
    "security_prevention.png"
)

create_infographic(
    "DETECTION",
    [
        "Analytics Dashboard",
        "Guardian",
        "Token Usage Analysis",
        "Pattern Recognition",
        "Behavioral Analysis",
    ],
    draw_magnifier_icon,
    "security_detection.png"
)

create_infographic(
    "RESPONSE",
    [
        "Referrer Blocking",
        "IP Blocking",
        "CIDR Blocking",
        "ASN/Network Blocking",
        "Token Revocation",
    ],
    draw_shield_icon,
    "security_response.png"
)

print("All three infographics generated!")
