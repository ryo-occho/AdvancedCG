#version 130

#define PI 3.141592653589793

in vec3 vWorldEyeDir;
in vec3 vWorldNormal;

out vec4 fragColor;

uniform sampler2D envmap;

float atan2(in float y, in float x)
{
    return x == 0.0 ? sign(y)*PI/2 : atan(y, x);
}

void main()
{
	vec3 incident = normalize(vWorldEyeDir);
	vec3 normal = normalize(vWorldNormal);
	vec3 reflected = normalize(reflect(incident, normal));

	float longitude = atan2(reflected.z, reflected.x);
	float latitude = asin(clamp(reflected.y, -1.0, 1.0));
	float u = fract(longitude / (2.0 * PI) + 1.0);
	float v = 0.5 + latitude / PI;

	fragColor = texture2D(envmap, vec2(u, v));
}
