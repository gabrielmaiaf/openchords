SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict 4XphY1QzWsD7cYMIlg8gMlvizL0leRFKV7PbhwZAMAdeAIYZ7SWAcDR4WHomiae

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: custom_oauth_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_authorizations; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_client_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_consents; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: webauthn_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: webauthn_credentials; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: song; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."song" ("id", "title", "created_at", "artist", "content", "language", "updated_at", "key") VALUES
	('044424a6-c7df-4daa-bbdd-daaec908fb78', 'Amazing Grace', '2026-05-13 21:55:08.187586+00', 'John Newton', ' A[G]mazing grace, how [G7]sweet the [C]sound,   That [G]saved a wretch like [D]me.   I [G]once was lost, but [G7]now am [C]found,   Was [G]blind but [D]now I [G]see.', 'EN', '2026-05-13 21:55:08.187586+00', 'G'),
	('ee9470c1-e405-4fef-954e-003b569bcc94', 'Ao orarmos, Senhor', '2026-05-13 21:49:35.356744+00', 'Corinhos Evangélicos', '{comment: Intro}
[D] [D7] [Em] [Em7] [A] [A7] [D] [A]

[D]Ao or[D7]armos, Senh[Em]or, [Em7]
Vem en[A]cher-nos com [A7]Teu am[D]or, [D7]
Para o [Bm]mundo agi[Bm7]tado esquec[Em]er, [Em7]
Cada d[A]ia Tua v[A7]ida viv[D]er. [D7]

Nossas v[G]idas vem, p[A]ois, transf[F#m]ormar,
Refri[Bm]gério pra [G]alma nos d[E]á, [A] [A7]
E ag[D]ora, com [D7]outros irm[Em]ãos [Em7]
Nos un[A]irmos aq[A7]ui em ora[D]ção [G] [Gm] [D]
', 'PT-BR', '2026-05-13 21:49:35.356744+00', 'D');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: buckets_analytics; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: buckets_vectors; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: vector_indexes; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

-- \unrestrict 4XphY1QzWsD7cYMIlg8gMlvizL0leRFKV7PbhwZAMAdeAIYZ7SWAcDR4WHomiae

RESET ALL;
